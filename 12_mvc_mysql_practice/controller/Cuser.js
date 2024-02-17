// TODO: 컨트롤러 코드
const User = require('../model/User');

// GET /user
exports.main = (req, res) => {
  res.render('index');
};
// GET /user/signin
exports.get_signin = (req, res) => {
  res.render('signin');
};
// GET /user/signup
exports.get_signup = (req, res) => {
  res.render('signup');
};

// POST /user/signin
// 로그인 요청
exports.post_signin = (req, res) => {
  // {userid, pw}
  console.log('controller:', req.body);
  User.post_signin(req.body, (result) => {
    console.log('controller result: ', result);
    if (result.length > 0) {
      res.send(true);
      // res.send({isLogin:true, userInfo: result[0]})
    } else {
      res.send(false);
    }
  });
};
// POST /user/signup
// 회원가입 요청
exports.post_signup = (req, res) => {
  // {userid, pw, name}
  console.log('controller: ', req.body);
  User.post_signup(req.body, () => {
    res.end();
  });
};

// POST /user/profile
// 프로필 정보 조회
exports.post_profile = (req, res) => {
  // {userid}
  console.log('controller', req.body);
  User.post_profile(req.body.userid, (result) => {
    console.log('controller result:', result); // {id, userid, name, pw}
    res.render('profile', result);
  });
};

// POST /user/profile/edit
// 프로필 정보 수정
exports.edit_profile = (req, res) => {
  User.edit_profile(req.body, () => {
    res.end();
  });
};

// POST /user/profile/delete
// 회원 삭제
exports.delete_profile = (req, res) => {
  User.delete_profile(req.body.id, () => {
    res.end();
  });
};
