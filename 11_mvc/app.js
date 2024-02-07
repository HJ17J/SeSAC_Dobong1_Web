const express = require('express');
const app = express();
const PORT = 8081;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index'); // index.js는 경로에서 생략 가능 => ('./routes')
app.use('/', indexRouter); // localhost:8081/ 경로를 기본으로 하는 경로는 indexRouter에서 처리

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
