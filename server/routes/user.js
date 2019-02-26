const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('users');
});

router.get('/all', (req, res) => {
    User.find().then((users) => {
        res.send({users});
    }).catch((e) => {
        res.status(404).send();
    });
});

router.post('/register', (req, res) => {
    console.log(req.body.name);
    let user = new User({
        name: req.body.name,
        email : req.body.email,
        password: req.body.password,
        degree: req.body.degree,
        domain: req.body.domain,
        yearsOfExperience: req.body.yearsOfExperience,
        salaryRange: req.body.salaryRange,
    });

    user.save().then((user) => {
        res.send({user});
    }).catch((e) => {
        console.log(e);
        res.status(400).send();
    });
});

router.post('/signIn', (req, res) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }).then((user) => {
        if (!user) {
            return res.status(404).send({
                error: "User not found"
            });
        }

        res.send(user);
    }).catch((e) => {
        res.status(404).send(e);
    });
});

module.exports = router;