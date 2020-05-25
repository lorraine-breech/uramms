const Professor = require('../data-models/professor');
const mongoose = require('mongoose');

exports.professors_get_all = (req, res, next) => {
    Professor.find()
    .select('-__v')
    .exec()
    .then(professors => {
        res.status(200).json(professors);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.professors_get_professor = (req, res, next) => {
    const id = req.params.professorId;
    Professor.findById(id)
    .select('-__v')
    .exec()
    .then(professor => {
        if(professor){
            res.status(200).json(professor);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    })
}

exports.professors_create_professor = (req, res, next) => {
    Professor.find({ employeeNumber: req.body.employeeNumber })
    .exec()
    .then(professor => {
        if(professor.length >= 1) {
            return res.status(409).json({
                message: 'Professor employee number already exists'
            });
        } else {
            const professor = new Professor({
                _id: new mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName,
                employeeNumber: req.body.employeeNumber,
                position: req.body.position,
                title: req.body.title,
                departmentId: req.body.departmentId,
                collegeId: req.body.collegeId,
                panelMemberAcountId: req.body.panelMemberAcountId,
                otherUserAccountType: req.body.otherUserAccountType
            });

            professor.save()
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

exports.professors_patch_professor = (req, res, next) => {
    const id = req.params.professorId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Professor.update({ _id: id }, { $set: updateOps })
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

exports.professors_delete_professor =  (req, res, next) => {
    const id = req.params.professorId;
    Professor.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message : 'Professor deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
