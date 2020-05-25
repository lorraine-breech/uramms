const PMAccount = require('../data-models/panel-member-account');
const mongoose = require('mongoose');

exports.pmAccounts_get_all = (req, res, next) => {
    PMAccount.find()
    .select('-__v')
    .exec()
    .then(pmAccounts => {
        res.status(200).json(pmAccounts);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.pmAccounts_get_pmAccount = (req, res, next) => {
    const id = req.params.pmAccountId;
    PMAccount.findById(id)
    .select('-__v')
    .exec()
    .then(pmAccount => {
        if(pmAccount){
            res.status(200).json(pmAccount);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.pmAccounts_create_pmAccount = (req, res, next) => {
    const pmAccount = new PMAccount({
        _id: new mongoose.Types.ObjectId(),
        studentIds: null,
        studies: null,
    });

    pmAccount.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.pmAccounts_patch_pmAccount = (req, res, next) => {
    const id = req.params.pmAccountId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    PMAccount.update({ _id: id }, { $set: updateOps })
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

exports.pmAccounts_delete_pmAccount = (req, res, next) => {
    const id = req.params.pmAccountId;
    PMAccount.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'pmAccount deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
