const express = require('express');
const ws = require('ws');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// console.log(server); // Server 객체

// 웹소켓 서버 접속 (server)
const wsServer = new ws.Server({ server });

// return type: String
// 현재 시간 관련 타임스탬프와 랜덤 문자열을 결합 > 고유 식별자 생성
function generateUniqueId() {
  const timestamps = Date.now().toString(36); // 36진수로 문자열 반환 (36진수 - 숫자+영문 알파벳)
  // 랜덤 문자열
  const randomString = Math.random().toString(36).substring(2); // 2번 인덱스부터 마지막 인덱스까지의 문자열을 반환
  return timestamps + randomString; // id로 사용
}

/* 
    ws 모듈의 이벤트
    - connection: 클라이언트와 웹소켓 서버가 연결되었을 때
    - message: 클라이언트로부터 메세지를 받았을 때
    - error: 연결 중 오류가 발생했을 때
    - close: 연결이 끝났을 때
 */

// 클라이언트들을 담을 배열
const sockets = [];

// 웹소켓 연결 시
wsServer.on('connection', (socket) => {
  // console.log(socket); // (하나의) 클라이언트에 대한 소켓 정보
  const clientId = generateUniqueId();
  console.log(`클라이언트 ${clientId}와 연결되었습니다.`);
  sockets.push(socket); // 클라이언트 연결 시 클라이언트 정보를 sockets 배열에 담음

  socket.on('message', (message) => {
    // console.log(message); // <Buffer ec b1 84 ed 8c 85 eb b0 a9 20 ec 9e 85 ec 9e a5 2e 2e 2e f0 9f 9a b6 e2 80 8d e2 99 80 ef b8 8f>

    const bufToString = message.toString('utf-8');
    // bufToString.id = clientId;
    console.log(bufToString);
    /* 
      `${buffer}`
      toString() 메서드를 사용하지 않아도 템플릿 리터럴 사용 시 암묵적으로 toString()이 실행됨
      */
    // console.log(`${message}`); //🚶...채팅방 입장...🚶‍♀️
    // console.log(`${message}`);

    // 모든 클라이언트에게 동일한 메세지를 보내기 위해 sockets 배열 순회
    sockets.forEach((element) => {
      element.send(bufToString);
    });
  });

  socket.on('error', (err) => {
    console.log('⚠️에러 발생');
    console.log(err);
  });

  socket.on('close', () => {
    console.log(`클라이언트 ${clientId}와 연결이 종료되었습니다`);
  });
});
