const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/adminController');
const bookController = require('../app/controllers/bookController');
const userController = require('../app/controllers/userController');
const authController = require('../app/controllers/authController');

router.get('/stored/books', adminController.storedBooks);

router.post('/books/store', bookController.store);

router.post('/auth/register', authController.registerNewUser);

router.get('/users', userController.getAllUser);

router.get('/books/:id/edit', bookController.edit);

router.get('/users/:id/edit', userController.edit);

router.put('/users/:id', userController.update);

router.delete('/users/:id', userController.destroy);

module.exports = router;