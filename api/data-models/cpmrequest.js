const mongoose = require('mongoose');

const cpmRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    panelRole:  { type: String, required: true },
    currentProfessorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
    newProfessorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
    level: { type: String }
});

module.exports = mongoose.model('CPMRequest', cpmRequestSchema, 'cpmrequests');