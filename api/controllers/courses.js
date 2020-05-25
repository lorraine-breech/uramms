const Course = require('../data-models/course');
const mongoose = require('mongoose');

exports.courses_get_all = (req, res, next) => {
    Course.find()
    .select('-__v')
    .exec()
    .then(courses => {
        res.status(200).json(courses);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.courses_get_course = (req, res, next) => {
    const id = req.params.courseId;
    Course.findById(id)
    .select('-__v')
    .exec()
    .then(course => {
        if(course){
            res.status(200).json(course);
        } else{
            res.status(404).json({ message: "No entry for the given ID." });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    })
}

exports.courses_create_course = (req, res, next) => {
    Course.find({ courseName: req.body.courseName })
    .exec()
    .then(course => {
        if(course.length >=1) {
            return res.status(409).json({
                message: 'Course name already exists'
            });
        } else {
            const course = new Course({
                _id: new mongoose.Types.ObjectId(),
                courseName: req.body.courseName,
                courseDescription: req.body.courseDescription
            });
        
            course.save()
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

exports.courses_patch_course = (req, res, next) => {
    const id = req.params.courseId;
    const updateOps =  {};
    for  (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Course.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.courses_delete_course = (req, res, next) => {
    const id = req.params.courseId;
    Course.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Course deleted'
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}
