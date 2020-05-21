const mongoose = require('mongoose');

const apmRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    panelRole:  { type: String, required: true },
    professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor', required: true }
});

module.exports = mongoose.model('APMRequest', apmRequestSchema, 'apmrequests');