const mongoose = require('mongoose');

const pmAccountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    studentIds: { type: [mongoose.Schema.Types.ObjectId], ref: 'Student' },
    studies: { type: [mongoose.Schema.Types.ObjectId], ref: 'Study' }
});

module.exports = mongoose.model('PMAccount', pmAccountSchema, 'panelmemberaccounts');