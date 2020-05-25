const mongoose = require('mongoose');

const studySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    researchStatus: { type: String, required: true },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' }
    /*
        2 more fields here : manuscript and proposal file fields
    */
    
});

module.exports = mongoose.model('Study', studySchema, 'studies');