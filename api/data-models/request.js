const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    requestType: { type: String, required: true },
    specificRequestId: { type: mongoose.Schema.Types.ObjectId },
    dateCreated: { type: Date, required: true },
    dateLastModified: { type: Date, required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    status: { type: String },
    responses: [{
        professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
        role: String,
        response: String,
        remarks: String,
        date: Date
    }],
    isActive: { type: Boolean },
    remarks: String

});

module.exports = mongoose.model('Request', requestSchema, 'requests');