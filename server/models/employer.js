const mongoose = require('mongoose');
// const Job = require('./job.js');

const EmployerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    jobs: {
        type: []
    }
});

var Employer = mongoose.model('Employer', EmployerSchema);
module.exports = Employer;