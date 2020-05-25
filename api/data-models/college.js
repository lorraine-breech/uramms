const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    collegeName: { type: String, required: true },
    collegeDescription: { type: String, required: true },
    departmentIds: { type: [mongoose.Schema.Types.ObjectId], ref: 'Department' }
});

module.exports = mongoose.model('College', collegeSchema, 'colleges');