const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Employer = require('../models/employer');

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
    let user = new User({
        name: req.body.name,
        email : req.body.email,
        password: req.body.password,
        degree: req.body.degree,
        domain: req.body.domain,
        yearsOfExperience: req.body.yearsOfExperience,
        salaryRange: req.body.salaryRange
    });

    user.save().then((user) => {
        console.log(user);
        res.send(user);
    }).catch((e) => {
        console.log(e);
        res.status(400).send();
    });
});

router.post('/registerEmployer', (req, res) => {
    let employer = new Employer({
        name: req.body.name,
        password: req.body.password
    });

    employer.save().then((employer) => {
        res.send(employer);
    }).catch((e) => {
        console.log(e);
        res.status(400).send();
    });
});

router.put('/update', (req, res) => {
    
    User.findOne({
        email: req.body.emailPrev
    }).then((User) => {
        User.findByIdAndUpdate(User._id, {$set: {
            name: req.body.name,
            email : req.body.email,
            degree: req.body.degree,
            domain: req.body.domain,
            yearsOfExperience: req.body.yearsOfExperience,
            salaryRange: req.body.salaryRange
        }}, {new: true})
    .then((User) => {
        if (!User) {
            return res.status(404).send();
        }

        return res.send(User);
    }).catch((err) => {
        res.status(400).send(e);
    })});

});

router.post('/signInEmployee', (req, res) => {
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

router.post('/signInEmployer', (req, res) => {
    Employer.findOne({
        name: req.body.email,
        password: req.body.password
    }).then((employer) => {
        if (!employer) {
            return res.status(404).send({
                error: "User not found"
            });
        }

        res.send(employer);
    }).catch((e) => {
        res.status(404).send(e);
    });
});

module.exports = router;