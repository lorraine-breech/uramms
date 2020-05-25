const APMRequest = require('../data-models/apmrequest');
const mongoose = require('mongoose');

exports.apmRequests_get_all = (req, res, next) => {
    APMRequest.find()
    .select('-__v')
    .exec()
    .then(apmRequests => {
        res.status(200).json(apmRequests);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.apmRequests_get_apmRequest = (req, res, next) => {
    const id = req.params.apmRequestId;
    APMRequest.findById(id)
    .select('-__v')
    .exec()
    .then(apmRequest => {
        if(apmRequest){
            res.status(200).json(apmRequest);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.apmRequests_create_apmRequest = (req, res, next) => {
    const apmRequest = new APMRequest({
        _id: new mongoose.Types.ObjectId(),
        panelRole: req.body.panelRole,
        professorId: req.body.professorId
    });

    apmRequest.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.apmRequests_delete_apmRequest = (req, res, next) => {
    const id = req.params.apmRequestId;
    APMRequest.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'apmRequest deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
