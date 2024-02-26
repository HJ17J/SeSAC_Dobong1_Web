const bcrypt = require('bcrypt');
const saltRounds = 10;

// 비밀번호 암호화
function hashKey(pw) {
  const key = bcrypt.hashSync(pw, saltRounds);
  return key;
}

function compareKey(loginPw, oriPw) {
  const key = bcrypt.compareSync(loginPw, oriPw);
  return key;
}

module.exports = { hashKey, compareKey };
