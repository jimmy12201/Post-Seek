const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Job = require('../models/job');
const Employer = require('../models/employer');

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

router.get('/company/:company', (req, res) => {
    Job.find({
        company: req.params.company
    }).then((jobs) => {
        res.send({jobs});
    }).catch((e) => {
        res.status(404).send();
    });
});

router.post('/job', (req, res) => {
    let job = new Job({
        name: req.body.name,
        company : req.body.company,
        description: req.body.description,
        degree: req.body.degree,
        domain: req.body.domain,
        yearsOfExperience: req.body.yearsOfExperience,
        salaryRange: req.body.salaryRange,
        applyLink: req.body.applyLink
    });

    job.save().then((job) => {
        Employer.findOne({
            name: job.company
        }).then((employer) =>{
            employer.jobs.push(job);
            employer.save().then((employer) => {
                res.send(job);
            });
        })
    }).catch((e) => {
        console.log(e);
        res.status(400).send();
    });
});

router.get('/:email', (req, res) => {
    let recJobs = [];
    let idSet = new Set();
    User.findOne({
        email: req.params.email
    }).then((user) => {
        Job.find({domain: user.domain,
            yearsOfExperience: user.yearsOfExperience,
            salaryRange: user.salaryRange
        }).then((jobs) => {
            addJobs(recJobs, jobs, idSet);
            Job.find({domain: user.domain,
                yearsOfExperience: user.yearsOfExperience
            }).then((jobs) => {
                addJobs(recJobs, jobs, idSet);
                Job.find({domain: user.domain})
                .then((jobs) => {
                    addJobs(recJobs, jobs, idSet);
                    Job.find().then((jobs) => {
                        addJobs(recJobs, jobs, idSet);
                        res.send({jobs: recJobs});
                    })
                });
            });
        });
    }).catch((e) => {
        res.status(404).send();
    });
});

function addJobs(recJobs, jobs, idSet) {
    for (let i = 0; i < jobs.length; i++) {
        if (!idSet.has(jobs[i].id)) {
            recJobs.push(jobs[i]);
            idSet.add(jobs[i].id);
        }
    }
}

module.exports = router;