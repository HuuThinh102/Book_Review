const reviews = require('../models/reviews');
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/mongoose.util');

class AdminController {
    // [GET] /admin/list-reviews
    listReviews(req, res, next) {
        reviews.find({})
            .then(_reviews => {
                res.send({_reviews: multipleMongooseToObject(_reviews)});
            })
            .catch(next)
    }
}

module.exports = new AdminController;