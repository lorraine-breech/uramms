const Study = require('../data-models/study');
const mongoose = require('mongoose');

exports.studies_get_all = (req, res, next) => {
    Study.find()
    .select('-__v')
    .exec()
    .then(studies => {
        res.status(200).json(studies);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.studies_get_study = (req, res, next) => {
    const id = req.params.studyId;
    Study.findById(id)
    .select('-__v')
    .exec()
    .then(study => {
        if(study){
            res.status(200).json(study);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.studies_create_study = (req, res, next) => {
    const study = new Study({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.paperType,
        description: req.body.description,
        researchStatus: req.body.researchStatus,
        departmentId: req.body.departmentId,
        collegeId: req.body.collegeId,
    });

    study.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.studies_patch_study = (req, res, next) => {
    const id = req.params.studyId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Study.update({ _id: id }, { $set: updateOps })
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

exports.studies_delete_study = (req, res, next) => {
    const id = req.params.studyId;
    Study.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'study deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
