const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/adminController');

router.get('/list-reviews', authController.registerNewUser);


module.exports = router;