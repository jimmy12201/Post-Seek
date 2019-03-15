require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use((req, res, next) => {
    // Allow react frontend to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // HTTP methods allowed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    // Request headers allowed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    //This is set to true to allow use of sessions
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Move to the next layer of middleware
    next();
});

app.use('/user/', require('./routes/user'));

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});