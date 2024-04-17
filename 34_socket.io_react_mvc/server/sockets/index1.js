const socketIO = require('socket.io');

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: 'http://localhost:3000',
    },
  });

  const nickInfo = {}; // {socket.id: 닉네임}
  io.on('connect', (socket) => {
    // 닉네임 중복검사
    socket.on('checkNick', (nickname) => {
      // Object.values = ['닉네임1', '닉네임2']
      if (Object.values(nickInfo).includes(nickname)) {
        socket.emit('error', '이미 존재하는 닉네임입니다.');
      } else {
        nickInfo[socket.id] = nickname;
        socket.emit('entrySuccess', nickname);
        // 입장 성공 시 전체 클라이언트에게 입장 알림 보내주기
        socket.broadcast.emit('notice', `${nickInfo[socket.id]}님이 입장하셨습니다.`);
        // 입장 성공, 전체 클라이언트에게 nickInfo 전달
        io.emit('updateNicks', nickInfo);
      }
    });

    // 퇴장
    socket.on('disconnect', () => {
      io.emit('notice', `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);
      delete nickInfo[socket.id];
      io.emit('updateNicks', nickInfo);
    });

    // 메세지 전송
    socket.on('send', (msgData) => {
      if (msgData.dm === 'all') {
        // 전체에 메세지 보내기
        io.emit('message', {
          id: msgData.myNick,
          message: msgData.msg,
        });
      } else {
        io.to(msgData.dm).emit('message', { id: msgData.myNick, message: msgData.msg, isDm: true });
        // 특정 소켓 아이디에 전달 (나 포함X)
        socket.emit('message', { id: msgData.myNick, message: msgData.msg, isDm: true });
        // 나에게만 메세지 전달
      }
    });
  });
}

module.exports = socketHandler;
