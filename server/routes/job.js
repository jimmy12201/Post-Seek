const express = require('express');
const router = express.Router();
const User = require('../models/user');
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