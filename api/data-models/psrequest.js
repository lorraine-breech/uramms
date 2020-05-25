const mongoose = require('mongoose');

const psRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    presentationType: { type: String, required: true },
    presentationDate: { type: Date, required: true },
    presentationTime: { type: String, required: true },
    presentationPlace: { type: String, required: true },
    accomplishmentReport: [{
        professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
        role: String,
        response: String,
        remarks: String,
        date: Date
    }],
    postponeRequest: {
        newDate: Date,
        newTime: String,
        newPlace: String,
        responses: [{
            professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
            role: String,
            response: String,
            remarks: String,
            date: Date
        }],
        dateCreated: Date 
    },
    isCanceled: Boolean,
    canceledReason: String
});

module.exports = mongoose.model('PSRequest', psRequestSchema, 'psrequests');