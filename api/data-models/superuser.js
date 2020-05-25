const mongoose = require('mongoose');

const superUserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
    employeeNumber: { type: String, required: true },
    position: String,
    title: String,
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' }
});

module.exports = mongoose.model('SuperUser', superUserSchema, 'superusers');