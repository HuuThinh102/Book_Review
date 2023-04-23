const reviews = require('../models/reviews');
const { mongooseToObject } = require('../../utils/mongoose.util');

class ReviewsController {
    // [GET] /reviews/detail/:id
    show(req, res, next) {
        reviews.findOneByID({ id: req.params.id })
            .then(review => {
                res.send(mongooseToObject(review))
            })
            .catch(next);
            
    }
    
}

module.exports = new ReviewsController;