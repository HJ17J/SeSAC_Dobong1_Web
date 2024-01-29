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
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
