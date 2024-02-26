const models = require('../models/index');
const encrypt = require('../utils/encrypt');

exports.mainPage = (req, res) => {
  res.render('index', { session: req.session });
};

exports.loginPage = (req, res) => {
  res.render('login');
};

exports.registerPage = (req, res) => {
  res.render('register');
};

exports.profilePage = async (req, res) => {
  if (req.session.userid) {
    const userInfo = await models.User.findOne({ where: { id: req.session.userid } });
    res.render('profile', { userInfo: userInfo.dataValues });
  } else {
    res.render('profile', { userInfo: null });
  }
};

exports.idCheck = async (req, res) => {
  const isDupl = await models.User.findOne({
    where: { id: req.body.id },
  });
  if (isDupl) {
    res.send({ isDuplicated: true });
  } else {
    res.send({ isDuplicated: false });
  }
};

exports.register = async (req, res) => {
  const register = await models.User.create({
    id: req.body.id,
    pw: encrypt.hashKey(req.body.pw),
    name: req.body.name,
  });
  if (register.dataValues) {
    res.send({ isRegister: true });
  } else {
    res.send({ isRegister: false });
  }
};

exports.login = async (req, res) => {
  const findUser = await models.User.findOne({
    where: { id: req.body.id },
  });
  if (loginInfo) {
    const rightUser = encrypt.compareKey(req.body.pw, findUser.dataValues.pw);
    if (rightUser) {
      const { id, name } = findUser.dataValues;
      req.session.userid = id;
      req.session.name = name;
      req.session.isLogin = true;
      res.send({ isLogin: req.session.isLogin });
    } else {
      req.session.isLogin = false;
      res.send({ isLogin: req.session.isLogin });
    }
  }
};

exports.logout = (req, res) => {
  if (req.body.id === req.session.userid) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send('server error');
        throw err;
      }
    });
    res.end();
  }
};

exports.deregister = async (req, res) => {
  const result = await models.User.destroy({ where: { id: req.body.id } });
  if (result) {
    res.send({ isDelete: true });
  } else {
    res.send({ isDelete: false });
  }
};

exports.editUserInfo = async (req, res) => {
  const { id, pw, name } = req.body;
  const result = await models.User.update({ pw: pw, name: name }, { where: { id: id } });
  if (result) {
    res.send({ isEdit: true });
  } else {
    res.send({ isEdit: false });
  }
};
