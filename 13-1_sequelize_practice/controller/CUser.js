const models = require('../models');

exports.main = (req, res) => {
  res.render('index');
};

exports.getSignUp = (req, res) => {
  res.render('signup');
};

exports.getSignIn = (req, res) => {
  res.render('signin');
};

exports.getProfile = (req, res) => {
  res.render('profile');
};

exports.idCheck = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log(result);
    if (result === null) {
      res.send({ isIdDupl: false });
    } else {
      res.send({ isIdDupl: true });
    }
  });
};

exports.postSignUp = (req, res) => {
  console.log(req.body);
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  });
  res.end();
};

exports.postSignIn = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    res.send({ userInfo: result });
  });
};

exports.postProfile = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    res.render('profile', { userInfo: result });
  });
};

exports.postEdit = (req, res) => {
  models.User.update(
    {
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: { userid: req.body.userid },
    }
  ).then(() => {
    res.end();
  });
};

exports.postDelete = (req, res) => {
  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.end();
  });
};
