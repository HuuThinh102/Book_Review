const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Reviews = new Schema({
    nameReviews: { type: String, required:true},
    contentCreator: { type: String},
    nameBook: { type: String },
    author: { type: String},
    image: { type: String},
    content: { type: String}
}, {collection: 'reviews'});


module.exports = mongoose.model('reviews', Reviews);