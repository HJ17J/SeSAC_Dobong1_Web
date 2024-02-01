const express = require('express');
const app = express();
const PORT = '8081';

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/get', (req, res) => {
  res.render('get');
});

app.get('/register', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  // 서버의 계정 정보와 클라이언트의 계정 정보가 일치하는지 확인
  const { id: clientId, password: clientPw } = req.body;
  if (clientId === id && password === pw) {
    res.send({
      userInfo: req.body,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
