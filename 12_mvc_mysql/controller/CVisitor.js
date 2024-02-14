const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

// GET /visitors
exports.getVisitors = (req, res) => {
  // [DB 연결 후]
  Visitor.getVisitors((result) => {
    console.log('CVisitor.js 전체 목록::', result);
    res.render('visitor', { visitors: result });
  });

  // [DB 연결 전 임시 데이터베이스]
  // const visitors = Visitor.getVisitors();
  // console.log(visitors);
  // res.render('visitor', { visitors: visitors });
};

// GET /visitor
exports.getVisitor = (req, res) => {
  console.log(req.params.id);
  Visitor.getVisitor(req.params.id, (result) => {
    console.log('CVisitor.js 1개 조회:', result);
    res.send(result);
  });
};

// POST /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body); //{name, comment}
  Visitor.postVisitor(req.body, (result) => {
    console.log('CVisitor.js POST:', result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log('CVisitor.js DELETE:', result);
    res.send(`${req.body.id}번 방명록 삭제 완료`);
  });
};

// PATCH /visitor
exports.patchVisitor = (req, res) => {
  console.log(req.body);
  Visitor.patchVisitor(req.body, (result) => {
    console.log('CVisitor.js PATCH:', result);
    res.send({ id: req.body.id, name: req.body.name, comment: req.body.comment });
  });
};
