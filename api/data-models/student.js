const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
    studyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Study'},
    studentNumber: { type: String, required: true },
    year: { type: Number, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College'},
    panel: {
        adviserId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
        coadviserId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
        panelistIds: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' } ]
    },
    researchStatus: { type: String }
    //calendar field here
    
});

module.exports = mongoose.model('Student', studentSchema, 'students');