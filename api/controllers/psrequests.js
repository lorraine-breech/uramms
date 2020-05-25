const PSRequest = require('../data-models/psrequest');
const mongoose = require('mongoose');

exports.psRequests_get_all = (req, res, next) => {
    PSRequest.find()
    .select('-__v')
    .exec()
    .then(psRequests => {
        res.status(200).json(psRequests);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.psRequests_get_psRequest = (req, res, next) => {
    const id = req.params.psRequestId;
    PSRequest.findById(id)
    .select('-__v')
    .exec()
    .then(psRequest => {
        if(psRequest){
            res.status(200).json(psRequest);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.psRequests_create_psRequest = (req, res, next) => {
    const psRequest = new PSRequest({
        _id: new mongoose.Types.ObjectId(),
        presentationType: req.body.presentationType,
        presentationDate: req.body.presentationDate,
        presentationTime: req.body.presentationTime,
        presentationPlace: req.body.presentationPlace,
        accomplishmentReport: [],
        postponeRequest: null,
        isCanceled: false,
        canceledReason: null
    });

    psRequest.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.psRequests_delete_psRequest = (req, res, next) => {
    const id = req.params.psRequestId;
    PSRequest.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'psRequest deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
