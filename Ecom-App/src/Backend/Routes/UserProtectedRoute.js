const express = require('express');
const { usercart ,userwishlist } = require('../Controllers/UserProtectController');

const { protectedroute } = require('../Middlewares/ProtectedRoute');

const router = express.Router();

router.route('/cart').post(protectedroute,usercart)

router.route('/wishlist').post( protectedroute, userwishlist)

module.exports = router;