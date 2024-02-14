const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost', // DB가 설치된 호스트 IP 주소
  user: 'sesac', // DB 접속 유저이름
  password: '1234', // DB 접속 비밀번호
  database: 'sesac', // DB명
});

// 전체 데이터 조회
// GET /visitor
exports.getVisitors = (cb) => {
  conn.query('SELECT * FROM VISITOR', (err, rows) => {
    if (err) throw err;
    console.log('Visitor.js 전체 목록::', rows);
    cb(rows);
  });
};

// 특정 데이터 한 개 조회
// GET /visitor
exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM VISITOR WHERE ID=${id}`, (err, rows) => {
    if (err) throw err;
    console.log('Visitor.js 1개 조회:', rows);
    cb(rows[0]); // 배열 형태로 넘어옴
  });
};

// 데이터 등록
// POST /visitor
exports.postVisitor = (data, cb) => {
  conn.query(`INSERT INTO VISITOR VALUES(null, '${data.name}', '${data.comment}')`, (err, rows) => {
    if (err) throw err; // 콘솔에 출력
    console.log('Visitor.js POST:', rows);
    /* 
    OkPacket {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 3,
      serverStatus: 2,
      warningCount: 0,
      message: '',
      protocol41: true,
      changedRows: 0
    }
 */
    cb(rows.insertId);
  });
};

// 데이터 삭제
// DELETE /visitor
exports.deleteVisitor = (id, cb) => {
  conn.query(`DELETE FROM VISITOR WHERE ID=${id}`, (err, rows) => {
    if (err) throw err;
    console.log('Visitor.js DELETE:', rows);
    cb(rows);
  });
};

// 데이터 수정
// PATCH /visitor
exports.patchVisitor = (data, cb) => {
  conn.query(
    `UPDATE VISITOR SET NAME='${data.name}', COMMENT='${data.comment}' WHERE ID=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      console.log('Visitor.js PATCH:', rows);
      cb(rows);
    }
  );
};

// [DB 연결 전]
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: 'hyeon', comment: '안녕하세요' },
//     { id: 2, name: '홍길동', comment: '반갑습니다' },
//     { id: 3, name: '김아무개', comment: 'hello' },
//     { id: 4, name: '이아무개', comment: 'hi' },
//     { id: 5, name: '박아무개', comment: '안녕!' },
//   ];
// };
