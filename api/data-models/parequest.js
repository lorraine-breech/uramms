const mongoose = require('mongoose');

const paRequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    paperType: { type: String, required: true },
    /*
        6 more fields here
    */
});

module.exports = mongoose.model('PARequest', paRequestSchema, 'parequests');