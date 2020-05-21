const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Student = require('../data-models/student');


router.get('/', (req, res, next) => {
    Student.find()
    .select('-__v')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    firstName: doc.firstName,
                    lastName: doc.lastName,
                    studyId: doc.studyId,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/api/students/" + doc._id
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

router.get('/:studentId', (req, res, next) => {
    const id = req.params.studentId;
    Student.findById(id)
    .select('-__v')
    .exec()
    .then(doc => {
        console.log("From the database: " + doc);
        if(doc){
            res.status(200).json({
                student: doc,
                request: {
                    type: 'GET',
                    decription: 'Get all students',
                    url: "http://localhost:3000/api/students"
                }
            });
        } else{
            res.status(404).json({message: "No entry for the given ID."});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
});

router.patch('/:studentId', (req, res, next) => {
    const id = req.params.studentId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Student.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product updated',
                request: {
                    type: 'GET',
                    url: "http://localhost:3000/api/students/" + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
});

router.delete('/:studentId', (req, res, next) => {
    const id = req.params.studentId;
    Student.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Product deleted',
            request: {
                type: 'POST',
                url: "http://localhost:3000/api/students",
                body: { firstName: 'String', lastName: 'String'}
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
});

module.exports = router;