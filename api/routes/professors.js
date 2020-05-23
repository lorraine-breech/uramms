const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Professor = require('../data-models/professor');

router.get('/', (req, res, next) => {
    Professor.find()
    .select('-__v')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            professors: docs.map(doc => {
                return {
                    firstName: doc.firstName,
                    middleName: doc.middleName,
                    lastName: doc.lastName,
                    employeeNumber: doc.employeeNumber,
                    position: doc.position,
                    title: doc.title,
                    departmentId: doc.departmentId,
                    collegeId: doc.collegeId,
                    panelMemberAccountId: doc.panelMemberAccountId,
                    otherUserAccountType: doc.otherUserAccountType,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/api/professors/" + doc._id
                    }
                }
            })
        };

        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
});

router.get('/:professorId', (req, res, next) => {
    const id = req.params.professorId;
    Professor.findById(id)
    .select('-__v')
    .exec()
    .then(doc => {
        console.log("From the database: " + doc);
        if(doc){
            res.status(200).json({
                professor: doc,
                request: {
                    type: 'GET',
                    decription: 'Get all professors',
                    url: "http://localhost:3000/api/professors"
                }
            });
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    })
});

router.post('/', (req, res, next) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        studyId: req.body.studyId
    });
    student
    .save()
    .then(result => {
        res.status(201).json({
            message: "Handling POST request to /students",
            createdStudent: {
                firstName: result.firstName,
                lastName: result.lastName,
                studyId: result.studyId,
                _id: result._id,
                request: {
                    type: 'POST',
                    url: "http://localhost:3000/api/students/" + result._id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
});

//post not done yet
router.post('/', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            return res.status(500).json({ error: err })
        } else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                password: hash,
                userType: req.body.userType,
                userTypeId: req.body.userTypeId
            });

            user.save()
            .then(result => {
                console.log(result)
                res.status(201).json({
                    message: 'User created'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            })
        }
    });
});

//post not done yet
router.post('/', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            return res.status(500).json({ error: err })
        } else {

            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                password: hash,
                userType: req.body.userType,
                userTypeId: req.body.userTypeId
            });

            user.save()
            .then(result => {
                console.log(result)
                res.status(201).json({
                    message: 'User created'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            })
        }
    });
    const professor = new Professor({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        employeeNumber: req.body.employeeNumber,
        position: req.body.position,
        title: req.body.title,
        departmentId: req.body.departmentId,
        collegeId: req.body.collegeId,
        panelMemberAccountId: req.body.panelMemberAccountId,
        otherUserAccountType: req.body.otherUserAccountType
    });
    professor.save()
    .then(result => {
        res.status(201).json({
            message: "Handling POST request to /professors",
            createdProfessor: {
                firstName: result.firstName,
                middleName: result.middleName,
                lastName: result.lastName,
                employeeNumber: result.employeeNumber,
                position: result.position,
                title: result.title,
                departmentId: result.departmentId,
                collegeId: result.collegeId,
                panelMemberAccountId: result.panelMemberAccountId,
                otherUserAccountType: result.otherUserAccountType,
                _id: result._id,
                request: {
                    type: 'POST',
                    url: "http://localhost:3000/api/studies/" + result._id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
});

module.exports = router;
