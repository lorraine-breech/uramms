const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    courseName: { type: String, required: true },
    courseDescription: { type: String, required: true }
});

module.exports = mongoose.model('Course', courseSchema, 'courses');