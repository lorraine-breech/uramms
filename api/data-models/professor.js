const mongoose = require('mongoose');

const professorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
    employeeNumber: { type: String, required: true },
    position: String,
    title: String,
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
    panelMemberAccountId: { type: mongoose.Schema.Types.ObjectId, ref: 'PMAccount'},
    otherUserAccountType: String
    //calendar here
});

module.exports = mongoose.model('Professor', professorSchema, 'professors');