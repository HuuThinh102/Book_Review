const express = require('express');
const router = express.Router();

const reviewsController = require('../app/controllers/reviewsController');

router.get('/detail/:id', reviewsController.show);

router.post('/store', reviewsController.store);

router.delete('/delete', reviewsController.deleteReview);


module.exports = router;