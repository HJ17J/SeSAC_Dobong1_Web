const express = require('express');
const router = express.Router();
const controller = require('../controller/CUser');

router.get('/', controller.main);
router.get('/signup', controller.getSignUp);
router.get('/signin', controller.getSignIn);
router.get('/profile', controller.getProfile);

router.post('/idCheck', controller.idCheck);
router.post('/signup', controller.postSignUp);
router.post('/signin', controller.postSignIn);
router.post('/profile', controller.postProfile);
router.post('/editProfile', controller.postEdit);
router.post('/deleteUser', controller.postDelete);
module.exports = router;
