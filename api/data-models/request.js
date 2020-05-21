const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    requestType: { type: String, required: true },
    requestId: { type: mongoose.Schema.Types.ObjectId , required: true },
    dateCreated: { type: Date, required: true },
    dateLastModified: { type: Date, required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    Status: { type: String, required: true },
    //responses array of objects here
    isActive: { type: Boolean, required: true },
    remarks: String

});

module.exports = mongoose.model('Request', requestSchema, 'requests');