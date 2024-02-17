// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'sesac',
  password: '1234',
  database: 'sesac',
});

/* 
    1. 뷰에서 요청
    2. 컨트롤러에서 정보를 받음 (req.body, req.query, req.params, ...)
    3. 모델에서 DB로 요청
    4. 모델에서 데이터 삽입/삭제/조회/.. 후 결과값 컨트롤러로 응답
    5. 컨트롤러에서는 res 객체를 통해 뷰로 응답
        뷰 > 컨트롤러 > 모델 > DB > 모델 > 컨트롤러 > 뷰
 */
// POST /user/signup
// 특정 회원 정보 등록
exports.post_signup = (data, cb) => {
  console.log('model', data);
  const sql = `INSERT INTO USER(USERID, NAME, PW) VALUES('${data.userid}','${data.name}','${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    cb();
  });
};

// POST /user/signin
// 특정 회원정보를 조회
exports.post_signin = (data, cb) => {
  // 회원가입 시 ID 중복검사 하지 않아 SELECT 값이 여러 개일 수 있음 > LIMIT 걸음
  const sql = `SELECT * FROM USER WHERE USERID='${data.userid}' AND PW='${data.pw}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('model: ', rows); // [{id, userid, name, pw}]
    cb(rows);
  });
};

// POST /user/profile
// 특정 회원정보를 조회
exports.post_profile = (userid, cb) => {
  console.log('model userid', userid);
  const sql = `SELECT * FROM USER WHERE USERID='${userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('model:', rows); // [{id, userid, name, pw}]
    cb(rows[0]); // {id, userid, name, pw}
  });
};

// POST /user/profile/edit
exports.edit_profile = (data, cb) => {
  const sql = `UPDATE USER SET PW='${data.pw}', NAME='${data.name}' WHERE ID=${data.id}`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('model: ', rows);
    cb();
  });
};

// POST /user/profile/delete
exports.delete_profile = (id, cb) => {
  const sql = `DELETE FROM USER WHERE ID=${id}`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('model', rows);
    cb();
  });
};
