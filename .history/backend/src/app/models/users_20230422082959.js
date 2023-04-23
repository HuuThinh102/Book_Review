const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, maxLength: 8, required: true, unique: true },
    password: { type: String, maxLength: 10, required: true},
    name: { type: String, maxLength: 50 },
    role: { type: String, enum: ['admin', 'reader', 'writer'], default: 'writer'},
    phone: { type: String, maxLength: 10, required: true}
}, { collection: 'users' });




module.exports = mongoose.model('users', userSchema);
