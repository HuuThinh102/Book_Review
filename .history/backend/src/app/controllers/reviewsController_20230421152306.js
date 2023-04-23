const reviews = require('../models/reviews');
const { multipleMongooseToObject } = require('../../utils/mongoose.util');

class ReviewsController {
    // [GET] /
    show(req, res, next) {
        reviews.find({})
            .then(_reviews => {
                res.send({_reviews: multipleMongooseToObject(_reviews)});
            })
            .catch(next)
    }
}

module.exports = new ReviewsController;