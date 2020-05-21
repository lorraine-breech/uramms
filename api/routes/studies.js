const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Study = require('../data-models/study');


router.get('/', (req, res, next) => {
    Study.find()
    .select('-__v')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    title: doc.title,
                    description: doc.description,
                    researchStatus: doc.researchStatus,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/api/studies/" + doc._id
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
    const study = new Study({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        researchStatus: req.body.researchStatus
    });
    study.save()
    .then(result => {
        res.status(201).json({
            message: "Handling POST request to /studies",
            createdStudy: {
                title: result.firstName,
                description: result.lastName,
                researchStatus: result.researchStatus,
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

router.get('/:studyId', (req, res, next) => {
    const id = req.params.studyId;
    Study.findById(id)
    .select('-__v')
    .exec()
    .then(doc => {
        console.log("From the database: " + doc);
        if(doc){
            res.status(200).json({
                study: doc,
                request: {
                    type: 'GET',
                    decription: 'Get all studies',
                    url: "http://localhost:3000/api/studies"
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

/*
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
*/

module.exports = router;