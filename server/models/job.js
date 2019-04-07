const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    }
});

var Job = mongoose.model('Job', JobSchema);
module.exports = Job;