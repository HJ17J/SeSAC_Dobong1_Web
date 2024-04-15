const socketIO = require('socket.io');
function socketHandler(server) {
  // - server: app.js에서 http 기반의 서버를 전달받음

  const io = socketIO(server, {
    cors: {
      origin: 'http://localhost:3000', // react 서버와 통신하기 위해
    },
  });

  io.on('connect', (socket) => {
    socket.on('test', (message) => {
      console.log(message);
    });

    // socket.on('btnClicked', (btnName) => {
    //   let msg;
    //   switch (btnName) {
    //     case 'hello':
    //       msg = '안녕하세요.';
    //       break;
    //     case 'study':
    //       msg = '공부합시다';
    //       break;
    //     case 'bye':
    //       msg = '잘가~';
    //       break;
    //     default:
    //       break;
    //   }
    //   socket.emit('btnMessage', { name: btnName, msg: msg });
    // });

    socket.on('hello', () => {
      socket.emit('helloMsg', '안녕하세요');
    });
    socket.on('study', () => {
      socket.emit('studyMsg', '공부합시다');
    });
    socket.on('bye', () => {
      socket.emit('byeMsg', '잘가~');
    });

    socket.on('disconnect', () => {
      // 클라이언트 연결 해제
    });
  });
}

module.exports = socketHandler;
