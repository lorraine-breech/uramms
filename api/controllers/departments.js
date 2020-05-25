const Department = require('../data-models/department');
const mongoose = require('mongoose');

exports.departments_get_all = (req, res, next) => {
    Department.find()
    .select('-__v')
    .exec()
    .then(departments => {
        res.status(200).json(departments);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.departments_get_department = (req, res, next) => {
    const id = req.params.departmentId;
    Department.findById(id)
    .select('-__v')
    .exec()
    .then(department => {
        if(department){
            res.status(200).json(department);
        } else{
            res.status(404).json({message: "No entry for the given ID."});
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.departments_create_department = (req, res, next) => {
    Department.find({ departmentName: req.body.departmentName })
    .exec()
    .then(department => {
        if(department.length >=1) {
            return res.status(409).json({
                message: 'Department name already exists'
            });
        } else {
            const department = new Department({
                _id: new mongoose.Types.ObjectId(),
                departmentName: req.body.departmentName,
                departmentDescription: req.body.departmentDescription
            });
        
            department.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                res.status(500).json({ error: err });
            })
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.departments_patch_department = (req, res, next) => {
    const id = req.params.departmentId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Department.update({ _id: id }, { $set: updateOps })
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

exports.departments_delete_department = (req, res, next) => {
    const id = req.params.departmentId;
    Department.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Department deleted'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
}
