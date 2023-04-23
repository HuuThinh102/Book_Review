const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/adminController');

router.get('/list-reviews', adminController.listReviews);


module.exports = router;