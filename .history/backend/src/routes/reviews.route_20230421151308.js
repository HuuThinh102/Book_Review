const express = require('express');
const router = express.Router();

const reviewsController = require('../app/controllers/reviewsController');

router.get('/detail/:id', reviewsController.show);


module.exports = router;