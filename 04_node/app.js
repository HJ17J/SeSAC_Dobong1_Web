const http = require('http'); // node.js 기본 제공
const fs = require('fs'); // 파일 입출력 모듈(node.js 기본 제공)
const PORT = 8081;

const server = http.createServer(function (request, response) {
  //   console.log(request.url);

  /* 예외처리
    try{} ~ catch(error){}문
    try 스코프 내부 문장에서 오류가 났을 때 catch문으로 error를 보냄
  */
  try {
    const data = fs.readFileSync('./inex.html');
    response.writeHead(200, { 'content-type': 'text/html, charset=utf-8' });
    /* response.writeHead(상태코드, 헤더정보)
          - content-type: text/html > 응답의 content 형식이 HTML이라는 의미
          - charset=utf-8 > 인코딩 방식은 utf-8
     */
    //   response.write('응답 완료');
    //   response.end('<h3>진짜 완료</h3>');
    response.write(data);
    response.end();
  } catch (error) {
    console.log(error);
    const pageNotFound = fs.readFileSync('./404.html');
    response.write(pageNotFound);
    response.end();
  } finally {
    // 예외 발생과 관계 없이 실행하고자 하는 코드 작성
    console.log('성공/실패 모두 실행됩니다');
  }
});

// 1. request 이벤트: 클라이언트 요청
server.on('request', function () {
  console.log('request event 실행');
});

// 2. connection 이벤트: 클라이언트 접속했을 때 발생
server.on('connection', (req, res) => {
  console.log('connection event 발생');
});

// port 열어줌
server.listen(PORT, function () {
  console.log('server is open');
  console.log(`http://localhost:${PORT}`);
});
