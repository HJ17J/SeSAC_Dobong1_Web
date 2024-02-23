const crypto = require('crypto'); // node.js 내장 모듈

/* 
    1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가능
    - createHash(알고리즘)
    - pbkdf2Sync(암호화할 값, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1) createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
// 인코딩으로는 base64, hex, ascii, binary 등을 쓸 수 있음

// 비밀번호를 받아서 암호화 시켜주는 함수
const createHashPw = (pw) => {
  return crypto.createHash('sha512').update(pw).digest('base64');
};

console.log('1st hashing::', createHashPw('1234'));
console.log('2nd hashing::', createHashPw('1234'));
console.log('3rd hashing::', createHashPw('1234'));
console.log('another value hashing::', createHashPw('1234.'));

// 1-2) pbkdf2Sync(암호화할 값, 솔트, 반복횟수, 키의 길이, 알고리즘).toString(인코딩 방식)
/* 
    pbkdf2Sync()
    - 솔트를 이용해서 해싱하는 함수
    - salt 생성: crypto.randomBytes(바이트수)
    - randomBytes와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴
 */

// const str = 'hello!';
// const buffer = Buffer.from(str);
// console.log(buffer); // <Buffer 68 65 6c 6c 6f 21>

// 회원가입 과정
// 새로운 hash와 salt를 만드는 과정 >> db에 hash와 salt를 저장해야 함
function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString('base64');
  const iteration = 100;
  const keylen = 64;
  const algorithm = 'sha512';

  const hash = crypto.pbkdf2Sync(pw, salt, iteration, keylen, algorithm).toString('base64');
  return { hash, salt };
}

// 로그인 과정
// DB에 있는 hash와 salt를 이용해서 input password의 hash값 검증
console.log('1st hashing::', saltAndHashPw('1234'));
console.log('2nd hashing::', saltAndHashPw('1234'));
console.log('3rd hashing::', saltAndHashPw('1234'));

function checkPw(inputPw, savedSalt, savedHash) {
  const iteration = 100; // saltAndHashPw랑 같아야 함
  const keylen = 64; // saltAndHashPw랑 같아야 함
  const algorithm = 'sha512'; // saltAndHashPw랑 같아야 함

  //inputPw를 해서 시켜주는 작업
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iteration, keylen, algorithm)
    .toString('base64');
  return savedHash === hash;
}

const registerPw = 'qwer1234';

// 회원가입
console.log('==================================================');
const { salt: registerSalt, hash: registerHash } = saltAndHashPw(registerPw);
console.log('암호화에 쓰인 salt::', registerSalt);
console.log('암호화된 hash:: ', registerHash);

// 로그인 >> 비밀번호가 db의 hash값과 일치하는지 확인
const isMatch = checkPw('qwer1234', registerSalt, registerHash);
const isMatch2 = checkPw('qwer1234', registerSalt, registerHash);
console.log('비밀번호 일치? >> ', isMatch);
console.log('비밀번호 일치? >> ', isMatch2);

console.log('==================================================');

/* 
    2. 양방향 암호화 - 복호화 가능
    - createCipheriv()
*/
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //salt와 비슷

const algorithm = 'aes-256-cbc';
const originalMessage = 'hello, world!';

// 암호화
function encrypt(text) {
  // 1. 암호화 객체 생성
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  // 2. 실제 데이터 암호화 작업
  // cipher.update(암호화할 데이터, 입력 인코딩 형식, 출력 인코딩 형식);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  // 3. final 이용해서 최종 결과 생성
  encrypted += cipher.final('base64');
  return encrypted;
}
console.log('양방향 암호화 - 암호화::', encrypt(originalMessage));

// 복호화
function decrypt(encryptedText) {
  // 1. 복호화 객체 생성
  const decypher = crypto.createDecipheriv(algorithm, key, iv);
  // 2. 실제 데이터 복호화
  let decrypted = decypher.update(encryptedText, 'base64', 'utf8');
  // 3. final 이용해서 최종 결과 생성
  decrypted += decypher.final('utf8');
  return decrypted;
}

const encryptedMessage = encrypt(originalMessage);
console.log('양방향 암호화 - 복호화::', decrypt(encryptedMessage));
