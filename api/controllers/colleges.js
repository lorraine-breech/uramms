const College = require('../data-models/college');
const mongoose = require('mongoose');

exports.colleges_get_all = (req, res, next) => {
    College.find()
    .select('-__v')
    .exec()
    .then(colleges => {
        res.status(200).json(colleges);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.colleges_get_college = (req, res, next) => {
    const id = req.params.collegeId;
    College.findById(id)
    .select('-__v')
    .exec()
    .then(college => {
        if(college){
            res.status(200).json(college);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.colleges_create_college = (req, res, next) => {
    College.find({ collegeName: req.body.collegeName })
    .exec()
    .then(college => {
        if(college.length >=1) {
            return res.status(409).json({
                message: 'College name already exists'
            });
        } else {
            const college = new College({
                _id: new mongoose.Types.ObjectId(),
                collegeName: req.body.collegeName,
                collegeDescription: req.body.collegeDescription
            });
        
            college.save()
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

exports.colleges_patch_college = (req, res, next) => {
    const id = req.params.collegeId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    College.update({ _id: id }, { $set: updateOps })
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

exports.colleges_delete_college = (req, res, next) => {
    const id = req.params.collegeId;
    College.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'College deleted'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
}
