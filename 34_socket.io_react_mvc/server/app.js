const express = require('express');
const app = express();
const PORT = 8080;

const http = require('http');
const server = http.createServer(app);
// const socketIO = require('socket.io');
const socketHandler = require('./sockets/index1.js'); // ./sockets/index.js
socketHandler(server);

// cors: 다른 서버에서 보내는 요청 제한
const cors = require('cors');
app.use(cors());

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
