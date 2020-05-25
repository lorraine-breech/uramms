const Student = require('../data-models/student');
const mongoose = require('mongoose');

exports.students_get_all = (req, res, next) => {
    Student.find()
    .select('-__v')
    .exec()
    .then(students => {
        res.status(200).json(students);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.students_get_student = (req, res, next) => {
    const id = req.params.studentId;
    Student.findById(id)
    .select('-__v')
    .exec()
    .then(student => {
        if(student){
            res.status(200).json(student);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    })
}

exports.students_create_student = (req, res, next) => {
    Student.find({ studentNumber: req.body.studentNumber })
    .exec()
    .then(student => {
        if(student.length >= 1) {
            return res.status(409).json({
                message: 'Student number already exists'
            });
        } else {
            const student = new Student({
                _id: new mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName,
                studyId: req.body.studyId,
                studentNumber: req.body.studentNumber,
                year: req.body.year,
                courseId: req.body.courseId,
                departmentId: req.body.departmentId,
                collegeId: req.body.collegeId,
                researchStatus: req.body.researchStatus
            });

            student.save()
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

exports.students_patch_student = (req, res, next) => {
    const id = req.params.studentId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Student.update({ _id: id }, { $set: updateOps })
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

exports.students_delete_student =  (req, res, next) => {
    const id = req.params.studentId;
    Student.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message : 'Student deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
