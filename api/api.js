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

const userRoutes = require('./routes/users');
const courseRoutes = require('./routes/courses');
const departmentRoutes = require('./routes/departments');
const collegeRoutes = require('./routes/colleges');
const studentRoutes = require('./routes/students');
const professorRoutes = require('./routes/professors');
const requestRoutes = require('./routes/requests');
const apmRequestRoutes = require('./routes/apmrequests');
const capRequestRoutes = require('./routes/caprequests');
const psRequestRoutes = require('./routes/psrequests');
const cpmRequestRoutes = require('./routes/cpmrequests');
const paRequestRoutes = require('./routes/parequests');
const pmAccountRoutes = require('./routes/panel-member-accounts');
const studyRoutes = require('./routes/studies');
const superUserRoutes = require('./routes/superusers');


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
app.use('/users', userRoutes);

app.use('/courses', courseRoutes);
app.use('/departments', departmentRoutes);
app.use('/colleges', collegeRoutes);
app.use('/students', studentRoutes);
app.use('/professors', professorRoutes);
app.use('/requests', requestRoutes);
app.use('/apm-requests', apmRequestRoutes);
app.use('/cap-requests', capRequestRoutes);
app.use('/ps-requests', psRequestRoutes);
app.use('/cpm-requests', cpmRequestRoutes);
app.use('/pa-requests', paRequestRoutes);
app.use('/panel-member-accounts', pmAccountRoutes);
app.use('/studies', studyRoutes);
app.use('/super-users', superUserRoutes);

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