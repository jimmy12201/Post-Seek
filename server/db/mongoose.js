const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = { mongoose };