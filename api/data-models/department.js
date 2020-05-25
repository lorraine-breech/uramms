const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    departmentName: { type: String, required: true },
    departmentDescription: { type: String, required: true },
    courseIds: { type: [mongoose.Schema.Types.ObjectId], ref: 'Course' }
});

module.exports = mongoose.model('Department', departmentSchema, 'departments');