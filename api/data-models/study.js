const mongoose = require('mongoose');

const studySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    researchStatus: { type: String, required: true },
    /*
        4 more fields here
    */
});

module.exports = mongoose.model('Study', studySchema, 'studies');