require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const mongoose = require('./db/mongoose');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/user/', require('./routes/user'));

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})