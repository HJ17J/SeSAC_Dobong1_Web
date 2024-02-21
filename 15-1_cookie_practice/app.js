const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8081;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie-parser 미들웨어 등록
app.use(cookieParser('secret'));
const cookieConfig = {
  maxAge: 1000 * 60 * 60 * 24,
  signed: true,
};

app.get('/', (req, res) => {
  // TODO: index.ejs render 시 두번째 인자로  popup key에 쿠키값 보내기
  console.log(req.signedCookies.popup);
  res.render('index', { popup: req.signedCookies.popup });
});

app.post('/setCookie', (req, res) => {
  // TODO: 쿠키 생성
  // 쿠키 이름: 'popup', 쿠키 값: 'hide'
  res.cookie('popup', 'hide', cookieConfig);
  res.send('쿠키 설정 성공');
});

/* 
    req 객체
    - req.cookies: 쿠키 정보 담겨 있음
    - req.signedCookies: 암호화된 쿠키 정보 담겨 있음
 */

/* 
    res 객체
    - res.cookie(key, val, op): 쿠키 설정
    - res.clearCookie(key, val, op): 쿠키 제거
 */

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
