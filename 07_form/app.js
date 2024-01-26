const express = require('express');
const app = express();
const PORT = 8081;

const rootDir = require('app-root-path');

app.set('view engine', 'ejs'); // ejs 사용할 것을 알려줌, view 엔진 설정
app.set('views', './views'); // views 폴더를 사용할 것을 알려줌

// body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형식으로 데이터를 주고받음

// root 경로로 get 요청이 들어왔을 때 views/index.ejs 화면을 보여줌
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/getForm', function (req, res) {
  console.log(req.query);
  // res.send('데이터 잘 받았습니다');
  // res.render('뷰', {보내줄 데이터})
  res.render('result', {
    title: 'GET',
    userInfo: req.query,
  });
});

app.post('/postForm', function (req, res) {
  // post 요청은 request.body에 담겨 있음
  console.log(req.body);
  //   res.send(`
  //   <ul>
  //     <li>${req.body.id}</li>
  //     <li>${req.body.password}</li>
  //   </ul>
  //   `);
  console.log('안녕하세요');
  res.render('result.ejs', {
    title: 'POST',
    userInfo: req.body,
  });
});

app.post('/js-form-check', (req, res) => {
  console.log(req.body);
  res.send('validation 응답');
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
  console.log(rootDir);
});
