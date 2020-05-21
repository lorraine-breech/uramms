const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    middleName: String,
    lastName: { type: String, required: true },
    studyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Study', required: true },
    /*
    studentNumber: { type: String, required: true },
    year: { type: Number, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true},
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true},
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true},
    //panel field of embedded object here
    researchStatus: { type: String, required: true }
    //calendar field here
    */
});

module.exports = mongoose.model('Student', studentSchema, 'students');