const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');

router.get('/detail/:id', siteController.index);


module.exports = router;