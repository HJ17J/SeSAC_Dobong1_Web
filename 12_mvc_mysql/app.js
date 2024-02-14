const express = require('express');
const app = express();
const PORT = 8081;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
// const indexRouter = require('./routes/index');
const indexRouter = require('./routes'); // 파일이 index.js일 경우는 index 생략 가능
app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
