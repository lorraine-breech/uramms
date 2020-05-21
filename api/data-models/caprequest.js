const mongoose = require('mongoose');

const capRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    partToChange: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    reason: { type: String, required: true }
});

module.exports = mongoose.model('CAPRequest', capRequestSchema, 'caprequests');