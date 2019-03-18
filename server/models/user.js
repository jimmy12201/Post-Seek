const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: String,
        required: true
    },
    salaryRange: {
        type: String,
        required: true
    }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;