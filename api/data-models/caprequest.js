const mongoose = require('mongoose');

const capRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    partToChange: { type: String },
    from: { type: String },
    to: { type: String },
    reason: { type: String }
});

module.exports = mongoose.model('CAPRequest', capRequestSchema, 'caprequests');