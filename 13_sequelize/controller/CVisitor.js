// const Visitor = require('../model/Visitor');
const models = require('../models');
const Visitor = require('../models/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

// GET /visitors
exports.getVisitors = (req, res) => {
  // [Sequelize 연결 후]
  models.Visitor.findAll().then((result) => {
    console.log('findAll >> ', result);
    console.log(result[0].dataValues.id);
    res.render('visitor', { visitors: result });
  });

  // [DB 연결 후]
  // Visitor.getVisitors((result) => {
  //   console.log('CVisitor.js 전체 목록::', result);
  //   res.render('visitor', { visitors: result });
  // });
  // [DB 연결 전 임시 데이터베이스]
  // const visitors = Visitor.getVisitors();
  // console.log(visitors);
  // res.render('visitor', { visitors: visitors });
};

// GET /visitor
exports.getVisitor = (req, res) => {
  // [sequelize]
  models.Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log(result);
    res.send(result);
  });

  console.log(req.params.id);
  // Visitor.getVisitor(req.params.id, (result) => {
  //   console.log('CVisitor.js 1개 조회:', result);
  //   res.send(result);
  // });
};

// POST /visitor
exports.postVisitor = (req, res) => {
  console.log(req.body); //{name, comment}

  // [sequelize]
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log(result);
    res.send(result);
  });

  // Visitor.postVisitor(req.body, (result) => {
  //   console.log('CVisitor.js POST:', result);
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });
};

// DELETE /visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  // [sequelize]
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log('sequelize destroy result', result);
    res.send(req.body.id + '번 방명록 삭제 완료');
  });

  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log('CVisitor.js DELETE:', result);
  //   res.send(`${req.body.id}번 방명록 삭제 완료`);
  // });
};

// PATCH /visitor
exports.patchVisitor = (req, res) => {
  //   console.log(req.body);

  //  [sequelize]
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  );
  //   Visitor.patchVisitor(req.body, (result) => {
  //     console.log('CVisitor.js PATCH:', result);
  //     res.send({ id: req.body.id, name: req.body.name, comment: req.body.comment });
  //   });
};
