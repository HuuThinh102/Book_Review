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

    // [DELETE] /reviews/delete
    deleteReview(req, res, next) {
        reviews.deleteOne({ _id: req.params.id })
            .then(() => res.send('DELETE SUCCESS!'))
            .catch(() => res.send('DELETE FAIL!'));
    }
    
}

module.exports = new ReviewsController;