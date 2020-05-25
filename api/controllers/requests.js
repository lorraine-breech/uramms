const Request = require('../data-models/request');
const mongoose = require('mongoose');

exports.requests_get_all = (req, res, next) => {
    Request.find()
    .select('-__v')
    .exec()
    .then(requests => {
        res.status(200).json(requests);
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
}

exports.requests_get_request = (req, res, next) => {
    const id = req.params.requestId;
    Request.findById(id)
    .select('-__v')
    .exec()
    .then(request => {
        if(request){
            res.status(200).json(request);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.requests_create_request = (req, res, next) => {
    const request = new Request({
        _id: new mongoose.Types.ObjectId(),
        requestType: req.body.requestType,
        specifiRequestId: req.body.specifiRequestId,
        dateCreated: Date.now(),
        dateLastModified: Date.now(),
        studentId: req.body.studentId,
        status: req.body.status,
        responses: req.body.responses,
        isActive: true,
        remarks: req.body.remarks
    });

    request.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.requests_patch_request = (req, res, next) => {
    const id = req.params.requestId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Request.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.requests_delete_request = (req, res, next) => {
    const id = req.params.requestId;
    Request.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Request deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
