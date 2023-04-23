const reviews = require('../models/reviews');
const { multipleMongooseToObject } = require('../../utils/mongoose.util');

class ReviewsController {
    // [GET] /
    show(req, res, next) {
        reviews.findOne({ id: req.params.id })
            .then(review => {
                res.send(mongooseToObject(review))
            })
            .catch(next);
            
    }
    
}

module.exports = new ReviewsController;