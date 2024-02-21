const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8081;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/static'));

const sessionConfig = {
  secret: 'secretKey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 10,
    httpOnly: true,
  },
};

const userInfo = { userId: 'cocoa', userPw: '1234' };
app.use(session(sessionConfig));

app.get('/', (req, res) => {
  // 로그인 된 유저 {isLogin:true, user:user}
  // 로그인 안 된 유저 {isLogin:false}
  console.log(req.session);
  if (req.session.user) {
    res.render('index', { isLogin: true, user: req.session.user });
  } else {
    res.render('index', { isLogin: false });
  }
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { id, pw } = req.body;
  if (id === userInfo.userId && pw === userInfo.userPw) {
    req.session.user = id;
    console.log(req.session);
    console.log(req.sessionID);
    res.redirect('/');
  } else {
    res.send(`
        <script>alert('아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.');
        document.location.href='/login'
        </script>
    `);
  }
});

app.get('/logout', (req, res) => {
  // 로그아웃
  // 메인페이지 렌더
  const user = req.session.user;
  if (user) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send('server error');
        throw err;
      }
      res.redirect('/');
    });
  } else {
    res.send(`
    <script>
        alert('이미 세션이 만료되었습니다.');
        document.location.href='/'
    </script>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
