const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');

const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
      
        closure(client);
      });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.post('/users', (req, res, next) =>{
    connection((client) =>{
        
    });
});

// Get users
router.get('/users', (req, res) => {
    connection((client) => {
        client.db('uramms').collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;