const mongoose = require('mongoose');

const cpmRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    panelRole:  { type: String, required: true },
    currentProfessorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor', required: true },
    newProfessorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor', required: true },
    level: { type: String, required: true }
});

module.exports = mongoose.model('CPMRequest', cpmRequestSchema, 'cpmrequests');