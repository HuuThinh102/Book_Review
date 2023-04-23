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

Reviews.pre('save', function(next) {
    this.name = this.name.replace(
        /[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi,
        ''
    );
    this.slug = slugify(this.name, {lower: true});
    next();
});

module.exports = mongoose.model('reviews', Reviews);