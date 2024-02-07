const express = require('express');
const app = express();

const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.login = (req, res) => {
  const login = req.body;
  let isSuccess = false;

  if (login.id === User.userInfo().id && login.pw === User.userInfo().pw) {
    isSuccess = true;
  }
  res.send(isSuccess);
};
