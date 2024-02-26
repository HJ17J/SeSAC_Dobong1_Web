const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const app = express();
const PORT = 8081;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/utils', express.static(__dirname + '/utils'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
    cookie: {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
    },
  })
);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
