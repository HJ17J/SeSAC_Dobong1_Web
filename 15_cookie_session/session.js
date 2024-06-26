const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8081;

app.set('views', './views');
app.set('view engine', 'ejs');

// session middleware 설정
const sessionConfig = {
  /* 
        - secret: 안전한 쿠키 전송을 위한 서명값 (필수)
        - resave: 세션 수정사항이 생기지 않더라도 매 요청마다 세션을 다시 저장할지 설정 (false 권장)
        - saveUninitialized: 세션에 저장할 내용이 없더라도 처음부터 세션을 생성할지 설정 (false 권장)
        - cookie: 세션 쿠키에 대한 설정 ({ maxAge, expires, ... })
        - secure: https에 대한 세션을 주고 받을지 설정 (true, false)
        - name: 세션 쿠키의 이름 (default: connect.sid)
        */
  secret: 'secretKey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    // maxAge: 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.get('/', (req, res) => {
  res.render('session');
});

// 세션 설정하기
app.get('/set', (req, res) => {
  // req.session.키이름='값'
  req.session.name = 'hyeon';
  res.send('세션 설정 완료');
});

// 세션 확인하기
app.get('/name', (req, res) => {
  console.log(req.sessionID);
  console.log(req.session);
  console.log(req.session.name);
  /* 
        v5MGL7AYQ8AOnaBwNsMqMlePViTTry62
        Session {
        cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
        name: 'hyeon'
        }
        hyeon
   */
  res.json({ id: req.sessionID, name: req.session.name });
});

// 세션 삭제하기
app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('server error');
      throw error;
    }
    res.send('세션 삭제 완료');
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
