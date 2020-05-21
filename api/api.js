const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/uramms', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function() {
    console.log("Connection Successful!");
});

const studyRoutes = require('./routes/studies');
const studentRoutes = require('./routes/students');
const usersRoutes = require('./routes/users');
const userRoutes = require('./routes/user');


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.mmethod === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods', 
            'PUT, POST, PATCH, DELETE, GET'
        );
        return res.status(200).json({});
    }
    next();
});

//Routes
app.use('/studies', studyRoutes);
app.use('/students', studentRoutes);
app.use('/users', usersRoutes);
app.use('/user', userRoutes);


app.use((req, res, next) =>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;