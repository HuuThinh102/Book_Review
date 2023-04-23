const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Reviews = new Schema({
    nameReviews: { type: String, maxLength: 100, required: true },
    contentCreator: { type: String},
    nameBook: { type: String },
    author: { type: String, maxLength: 200 },
    image: { type: String, maxLength: 100},
    
}, {collection: 'reviews'});


module.exports = mongoose.model('Reviews', Reviews);