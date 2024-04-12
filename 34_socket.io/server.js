const express = require('express');
const app = express();
const PORT = 8080;
const socketIO = require('socket.io');
const http = require('http');

// http 기반으로 서버 생성
// express 사용하기 위해 createServer 안에 넣어줌
const server = http.createServer(app);

// socket이 http 모듈로 생성된 서버에서 동작
const io = socketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

app.get('/room', (req, res) => {
  res.render('room');
});

io.on('connection', (socket) => {
  //   console.log(socket); // client 관련 정보
  console.log('socket id >>', socket.id); // client의 id값이 명시되어 있음
  //   socket.on('event_name', (arg1, arg2, arg3, cb) => {
  //     console.log(arg1);
  //     console.log(arg2);
  //     console.log(arg3);
  //     cb('응답!');
  //   });

  //   socket.on('new_message', (message) => {
  //     console.log(message);
  //      cb(message); //socket - client 한명(나한테만 보임)
  //   });

  socket.on('new_message', (message) => {
    io.emit('message_render', message);
  });

  socket.on('disconnect', () => {
    console.log(`${socket.id} 연결`);
  });

  // [room.ejs] 채팅방 관련 코드
  // 2. 클라이언트에게 방 이름 전달받아 방 생성
  socket.on('join', (chatRoom) => {
    socket.join(chatRoom); // join(채팅방이름) 이용해서 채팅방 만들기
    // console.log(socket.rooms); // { 'jGHbPoveTLzA7CBiAAAF', '집에가고싶어' }
    socket.room = chatRoom;
    // 3. 채팅방 사람들에게 입장 메시지 전달
    // - 나를 제외한 채팅방 인원 모두에게 전송
    // socket.broadcast.to(chatRoom).emit('userjoin', `[${socket.id}]님이 입장하셨습니다.`);
    // - 나를 포함한 채팅방 인원 모두에게 전송
    io.to(chatRoom).emit('userjoin', `[${socket.id}]님이 입장하셨습니다.`);
  });

  // 6. 클라이언트로부터 메세지 받음
  socket.on('message', (message) => {
    console.log(message);
    io.to(socket.room).emit('room_message', message);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
