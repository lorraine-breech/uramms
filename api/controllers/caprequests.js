const CAPRequest = require('../data-models/caprequest');
const mongoose = require('mongoose');

exports.capRequests_get_all = (req, res, next) => {
    CAPRequest.find()
    .select('-__v')
    .exec()
    .then(capRequests => {
        res.status(200).json(capRequests);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.capRequests_get_capRequest = (req, res, next) => {
    const id = req.params.capRequestId;
    CAPRequest.findById(id)
    .select('-__v')
    .exec()
    .then(capRequest => {
        if(capRequest){
            res.status(200).json(capRequest);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.capRequests_create_capRequest = (req, res, next) => {
    const capRequest = new CAPRequest({
        _id: new mongoose.Types.ObjectId(),
        partToChange: req.body.partToChange,
        from: req.body.from,
        to: req.body.to,
        reason: req.body.reason
    });

    capRequest.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.capRequests_delete_capRequest = (req, res, next) => {
    const id = req.params.capRequestId;
    CAPRequest.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'capRequest deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
