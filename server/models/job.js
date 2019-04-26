const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    degree: {
        type: String
    },
    company: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    yearsOfExperience: {
        type: String,
    },
    salaryRange: {
        type: String,
        required: true
    },
    applyLink: {
        type: String
    }
});

var Job = mongoose.model('Job', JobSchema);
module.exports = Job;