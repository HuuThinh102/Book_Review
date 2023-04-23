const reviews = require('../models/reviews');
const { mongooseToObject } = require('../../utils/mongoose.util');

class ReviewsController {
    // [GET] /reviews/detail/:id
    show(req, res, next) {
        reviews.findOne({_id: req.params.id })
            .then(review => {
                res.send(mongooseToObject(review))
            })
            .catch(next);
            
    }
    store(req, res, next) {
        const formData = req.body;
        const review = new reviews(formData);
        review.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));
    }
    
}

module.exports = new ReviewsController;