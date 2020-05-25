const PARequest = require('../data-models/parequest');
const mongoose = require('mongoose');

exports.paRequests_get_all = (req, res, next) => {
    PARequest.find()
    .select('-__v')
    .exec()
    .then(paRequests => {
        res.status(200).json(paRequests);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.paRequests_get_paRequest = (req, res, next) => {
    const id = req.params.paRequestId;
    PARequest.findById(id)
    .select('-__v')
    .exec()
    .then(paRequest => {
        if(paRequest){
            res.status(200).json(paRequest);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.paRequests_create_paRequest = (req, res, next) => {
    const paRequest = new PARequest({
        _id: new mongoose.Types.ObjectId(),
        paperType: req.body.paperType,
        panelRevisions: [],
        deptChairRevisions: [],
        deanRevisions: [],
        colSecRevision: [],
        level: req.body.level
    });

    paRequest.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.paRequests_patch_paRequest = (req, res, next) => {
    const id = req.params.paRequestId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    PARequest.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
}

exports.paRequests_delete_paRequest = (req, res, next) => {
    const id = req.params.paRequestId;
    PARequest.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'paRequest deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
