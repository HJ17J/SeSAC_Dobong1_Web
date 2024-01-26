const express = require('express');
const app = express();
const PORT = 8081;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/get', function (req, res) {
  res.render('userInfo-get');
});

app.get('/getInfo', function (req, res) {
  console.log(req.query);
  res.render('result', {
    title: 'GET',
    userInfo: req.query,
  });
});

app.get('/post', function (req, res) {
  res.render('userInfo-post');
});

app.post('/postInfo', function (req, res) {
  console.log(req.body);
  res.render('result', {
    title: 'POST',
    userInfo: req.body,
    addInfo: true,
  });
});

app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`);
});
