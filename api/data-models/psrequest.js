const mongoose = require('mongoose');

const psRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    presentationType: { type: String, required: true },
    presentationDate: { type: Date, required: true },
    presentationTime: { type: String, required: true },
    presentationPlace: { type: String, required: true },
    /*
        3 more fields here
    */
    canceledReason: String
});

module.exports = mongoose.model('PSRequest', psRequestSchema, 'psrequests');