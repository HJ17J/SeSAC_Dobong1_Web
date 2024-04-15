const express = require('express');
const app = express();
const PORT = 8080;
const http = require('http');
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');
app.get('/chat', (req, res) => {
  res.render('talk_basic');
});

io.on('connection', (socket) => {
  socket.broadcast.emit('notice', `${socket.id}님이 입장하셨습니다.`);
  socket.on('send', (message) => {
    console.log(socket.id);
    io.emit('message', { id: socket.id, message: message });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
