const express = require('express');
const app = express();
const PORT = 8080;
const socketIO = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');

app.get('/prac1', (req, res) => {
  res.render('button');
});

app.get('/prac2', (req, res) => {
  res.render('chat');
});

// prac1 socket 연결
// io.on('connection', (socket) => {
//   socket.on('btn_click', (btnName) => {
//     let btnMsg = '';
//     switch (btnName) {
//       case 'hello':
//         btnMsg = '안녕하세요.';
//         break;
//       case 'study':
//         btnMsg = '공부합시다!';
//         break;
//       case 'bye':
//         btnMsg = '잘가~';
//         break;
//       default:
//         break;
//     }
//     console.log(`${btnName}: ${btnMsg}`);
//     io.emit('send_msg', btnMsg);
//   });
// });

// prac2 socket 연결
io.on('connection', (socket) => {
  console.log('socket 연결');
  console.log('socket id: ', socket.id);
  // 클라이언트 측에서 메시지 전달받음
  socket.on('send_message', (message) => {
    console.log(message);
    console.log(socket.id);
    io.emit('message_render', message, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
