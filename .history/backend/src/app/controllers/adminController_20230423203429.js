const User = require('../models/users');
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/mongoose.util');

class AdminController {
    // [POST] /admin/auth/register
    listReviews(req, res, next) {
        reviews.find({})
            .then(_reviews => {
                res.send({_reviews: multipleMongooseToObject(_reviews)});
            })
            .catch(next)
    }
}

module.exports = new AuthController;    