const express = require('express');
const { userRegister ,userLogin } = require('../Controllers/UserController');

const router = express.Router();

router.route('/').post(userRegister)

router.route('/login').post(userLogin)

module.exports = router;