const express = require('express');
const app = express();
const PORT = 8081;
const jwt = require('jsonwebtoken');
const SECRET = '4ozw42c5mgAUj9Kg7LtBeWH3znmkea'; // 랜덤 문자열 생성

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: 'cocoa', pw: '1234', name: '코코아', age: 18 };

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

// 로그인 요청 시 jwt 생성
app.post('/login', (req, res) => {
  const { id, pw } = req.body;
  const { id: realId, pw: realPw } = userInfo;
  if (id === realId && pw === realPw) {
    // jwt.sign(payload, secretOrPrivateKey, options);
    const token = jwt.sign({ id: id }, SECRET); // 비밀번호 저장X (클라이언트에 저장하여 쓰므로 복호화 가능성 있음)
    console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNvY29hIiwiaWF0IjoxNzA4NTAxNTI5fQ.BmEzr0IdfCt4YkZ7uKytIcrcmCqE1qNzyyK2uP2t9Gg (Header.Payload.Signature)
    res.send({ result: true, token: token });
  } else {
    res.send({ result: false, message: '로그인 정보가 올바르지 않습니다.' });
  }
});

app.post('/token', (req, res) => {});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
