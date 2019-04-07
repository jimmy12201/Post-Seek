const express = require('express');
const router = express.Router();
const Job = require('../models/job');

router.get('/', (req, res) => {
    res.send('jobs');
});

router.get('/all', (req, res) => {
    Job.find().then((jobs) => {
        res.send({jobs});
    }).catch((e) => {
        res.status(404).send();
    });
});

module.exports = router;