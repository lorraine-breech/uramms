/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

var dbClient;

module.exports = {
    
    connectToServer:  function(callback) {
        MongoClient.connect( url, { useUnifiedTopology: true }, function(err, client){
            dbClient = client;
            return callback(err);
        })
    },

    getDBClient: function(){
        return dbClient;
    }
};

*/