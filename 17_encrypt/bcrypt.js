const bcrypt = require('bcrypt'); // 강력한 암호화 모듈
const saltRounds = 10; // 해시함수 반복 횟수(숫자가 클수록 안전하지만, 성능 저하를 일으킴)

// 회원가입 >> 해시값 생성
function hashPW(pw) {
  // hashSync(비밀번호, 솔트라운드); return 암호화된 문자
  return bcrypt.hashSync(pw, saltRounds);
}

// 로그인 >> 해시값 일치 확인
function comparePW(inputPw, hashedPw) {
  // compareSync(원본 비밀번호, 해시된 비밀번호)
  return bcrypt.compareSync(inputPw, hashedPw);
}

// 비밀번호에 대한 해시값 작성
const originalPassword = '12345';
const hashedPw = hashPW(originalPassword);
console.log('암호화된 비밀번호::', hashedPw);

// 비밀번호 일치 여부 확인
// 로그인 작업 시 활용
const isMatch = comparePW('12345', hashedPw);
const isMatch2 = comparePW('12345', hashedPw);

console.log('비밀번호 일치??', isMatch);
console.log('비밀번호 일치??', isMatch2);
