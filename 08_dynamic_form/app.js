const express = require('express');
const app = express();
const PORT = '8081';

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  // res.render('index.ejs');
  res.render('api');
});

/* ajax */
app.get('/ajax', (req, res) => {
  //   console.log(req.query);
  //   res.send('AJAX 응답 완료');
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/* axios */
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/* fetch */
app.get('/fetch', (req, res) => {
  console.log(req.query);
  //   res.send('fetch 응답 완료');
  res.send(req.query);
});

app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/* open api 사용 */
app.get('/open-api', (req, res) => {
  res.render('api');
});

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});
