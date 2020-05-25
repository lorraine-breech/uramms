const mongoose = require('mongoose');

const paRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    paperType: { type: String, required: true },
    //paperField (file)
    panelRevisions: [{
        dateCreated: Date,
        professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
        details: String,
        isRead: Boolean,
        isRevisionDone: Boolean,
        remarks: String
    }],
    deptChairRevisions: [{
        dateCreated: Date,
        professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
        details: String,
        isRead: Boolean,
        isRevisionDone: Boolean,
        remarks: String
    }],
    deanRevisions: [{
        dateCreated: Date,
        professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
        details: String,
        isRead: Boolean,
        isRevisionDone: Boolean,
        remarks: String
    }],
    colSecRevisions: [{
        dateCreated: Date,
        professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
        details: String,
        isRead: Boolean,
        isRevisionDone: Boolean,
        remarks: String
    }],
    level: String,

});

module.exports = mongoose.model('PARequest', paRequestSchema, 'parequests');