const mongoose = require('mongoose');

const pmAccountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId
    //fields here (how to set type array of ObjectId)
});

module.exports = mongoose.model('PMAccount', pmAccountSchema, 'panelmemberaccounts');