const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8081;

app.set('views', './views');
app.set('view engine', 'ejs');

// cookie middleware 사용
// ver1. 암호화 되지 않은 쿠키
app.use(cookieParser('hellohigoodmorning'));
const cookieConfig = {
  /* 
        - maxAge: 쿠키 수명(단위 ms)
        - expires: 만료 날짜, GTM 형식으로 설정
        - httpOnly: http 통신만 접근 허용
        - path: '/abc', 쿠키가 해당 경로와 그 하위 경로에서만 활성화(default: '/')
        - secure: https로 통신하는 경우에만 쿠키 전송
        - signed: 쿠키 암호화 (true, false)
     */
  maxAge: 60 * 1000,
  httpOnly: true,
  signed: true, // 쿠키 암호화
};

app.get('/', (req, res) => {
  res.render('cookie');
});

// 쿠키 설정
// res.cookie(쿠키이름, 쿠키값, 옵션);
app.get('/setCookie', (req, res) => {
  res.cookie('myCookie', 'cookie!!!', cookieConfig);
  res.send('set cookie 완료');
});

// 쿠키 가져오기
// req.cookies에 쿠키 정보 담겨있음 (암호화 되지 않은 쿠키일 경우에만)
app.get('/getCookie', (req, res) => {
  //   ver1. 암호화 되지 않은 쿠키
  //   console.log(req.cookies);
  //   res.send(req.cookies);

  //  ver2. 암호화 된 쿠키
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

// 쿠키 삭제하기
app.get('/clearCookie', (req, res) => {
  res.clearCookie('myCookie', 'cookie!!!', cookieConfig); // 삭제할 쿠키를 특정할 시에는 res.cookie로 설정했던 인자와 동일하게 해야함
  res.send('쿠키 삭제');
});

const cookieConfig2 = {
  maxAge: 60 * 1000,
  httpOnly: true,
  path: '/abc',
};

app.get('/abc', (req, res) => {
  res.cookie('abc', 'another cookie', cookieConfig2);
  res.render('abc');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* 
    ver 1. 암호화 하지 않았을 때
    - 미들웨어 설정 >> app.use(cookieParser())
    - 쿠키 설정 >> res.cookie(이름, 값, 옵션)
    - 쿠키 확인 >> req.cookies 객체에서 확인
    - 쿠키 삭제 >> res.clearCookie(이름, 값, 옵션)
        - 쿠키 삭제만 하는 것이고 응답 완료가 되지는 않음
        - 이름, 값, 옵션이 일치해야 삭제됨
            (expires, maxAge 옵션은 일치하지 않아도 됨)
 */

/* 
    ver 2. 암호화 된 쿠키일 때
    - 미들웨어 설정 >> app.use(cookieParser('특정 문자열'))
        - 임의의 문자열은 개발자가 정하는 것
    - 쿠키 설정 >> res.cookie(이름, 값, 옵션) & 옵션 signed: true 설정
    - 쿠키 확인 >> req.signedCookies 객체에서 확인
    - 쿠키 삭제 >> ver 1.과 동일
 */
