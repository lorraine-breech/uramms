const CPMRequest = require('../data-models/cpmrequest');
const mongoose = require('mongoose');

exports.cpmRequests_get_all = (req, res, next) => {
    CPMRequest.find()
    .select('-__v')
    .exec()
    .then(cpmRequests => {
        res.status(200).json(cpmRequests);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.cpmRequests_get_cpmRequest = (req, res, next) => {
    const id = req.params.cpmRequestId;
    CPMRequest.findById(id)
    .select('-__v')
    .exec()
    .then(cpmRequest => {
        if(cpmRequest){
            res.status(200).json(cpmRequest);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.cpmRequests_create_cpmRequest = (req, res, next) => {
    const cpmRequest = new CPMRequest({
        _id: new mongoose.Types.ObjectId(),
        panelRole: req.body.panelRole,
        currentProfessorId: req.body.currentProfessorId,
        newProfessorId: req.body.newProfessorId,
        level: req.body.level
    });

    cpmRequest.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.cpmRequests_delete_cpmRequest = (req, res, next) => {
    const id = req.params.cpmRequestId;
    CPMRequest.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'cpmRequest deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
