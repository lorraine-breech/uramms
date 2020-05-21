const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    collegeName: { type: String, required: true },
    collegeDescription: { type: String, required: true }
    //courses: array of ObjectIds
});

module.exports = mongoose.model('College', collegeSchema, 'colleges');