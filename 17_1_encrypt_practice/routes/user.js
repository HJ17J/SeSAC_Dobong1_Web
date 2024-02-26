const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.mainPage);
router.get('/login', controller.loginPage);
router.get('/register', controller.registerPage);
router.get('/profile', controller.profilePage);

router.post('/idCheck', controller.idCheck);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.post('/deregister', controller.deregister);
router.post('/editUserInfo', controller.editUserInfo);

module.exports = router;
