const express = require('express');
const app = express();
const PORT = 8080;
const http = require('http');
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('talk_dm');
});

const nickInfo = {};

io.on('connection', (socket) => {
  socket.on('checkNick', (nickname) => {
    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      socket.emit('error', '이미 존재하는 닉네임입니다.');
    } else {
      nickInfo[socket.id] = nickname;
      socket.emit('entrySuccess', nickname);
      console.log(nickInfo);
      socket.broadcast.emit('notice', `${nickname}님이 입장하셨습니다.`);
      io.emit('updateNicks', nickInfo);
    }
  });
  socket.on('send', (msgData) => {
    console.log(`${socket.id}: ${msgData.msg}`);
    if (msgData.dm === 'all') {
      io.emit('message', { id: msgData.myNick, message: msgData.msg });
    } else {
      // 특정 socket.id를 가진 클라이언트, 본인은 포함X
      io.to(msgData.dm).emit('message', { id: msgData.myNick, message: msgData.msg, isDm: true });
      // 나에게만 데이터 보내기
      //   socket.emit('message', {
      //     id: msgData.myNick,
      //     message: msgData.msg,
      //     isDm: true,
      //   });
    }
  });
  socket.on('disconnect', () => {
    io.emit('notice', `${nickInfo[socket.id]}님이 퇴장하셨습니다.`);
    delete nickInfo[socket.id];
    io.emit('updateNicks', nickInfo);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
