const SuperUser = require('../data-models/superuser');
const mongoose = require('mongoose');

exports.superusers_get_all = (req, res, next) => {
    SuperUser.find()
    .select('-__v')
    .exec()
    .then(superusers => {
        res.status(200).json(superusers);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.superusers_get_superuser = (req, res, next) => {
    const id = req.params.superuserId;
    SuperUser.findById(id)
    .select('-__v')
    .exec()
    .then(superuser => {
        if(superuser){
            res.status(200).json(superuser);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    })
}

exports.superusers_create_superuser = (req, res, next) => {
    SuperUser.find({ employeeNumber: req.body.employeeNumber })
    .exec()
    .then(superuser => {
        if(superuser.length >= 1) {
            return res.status(409).json({
                message: 'superuser employee number already exists'
            });
        } else {
            const superuser = new SuperUser({
                _id: new mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName,
                employeeNumber: req.body.employeeNumber,
                position: req.body.position,
                title: req.body.title,
                departmentId: req.body.departmentId,
                collegeId: req.body.collegeId
            });

            superuser.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            })   
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
}

exports.superusers_patch_superuser = (req, res, next) => {
    const id = req.params.superuserId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    SuperUser.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
}

exports.superusers_delete_superuser =  (req, res, next) => {
    const id = req.params.superuserId;
    SuperUser.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message : 'superuser deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
