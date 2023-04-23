const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const Reviews = new Schema({
    ID: {type: String, maxLength: 10, required: true, unique: true },
    nameReviews: { type: String, maxLength: 100, required: true },
    contentCreator: { type: String},
    nameBook: { type: String },
    author: { type: String, maxLength: 200 },
    image: { type: String, maxLength: 100},
    
}, {collection: 'reviews'});


module.exports = mongoose.model('reviews', Reviews);