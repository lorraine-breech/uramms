const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const User = require('../data-models/user');


router.post('/login', (req, res, next) => {
    console.log("Entered login route.");
    User.findOne({ username: req.body.username })
    .exec()
    .then(user =>{
        console.log("Found the document.");
        console.log(user);
        if(!user){
            return res.status(401); 
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            console.log("Entered Bcrypt Compare.");
            if (err) {
                console.log("Bcrypt compare error.");
                return res.status(401);
            }
            if (result) {
                const token = jwt.sign({
                    username: user.username,
                    userId: user._id
                }, process.env.JWT_KEY, 
                {  
                    expiresIn: "1h"
                }
                )
                console.log("Response Body: " + user + "/n - " + token);
                return res.status(200).json({
                    user: user,
                    token: token
                });
            }
            return res.status(401);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
});


router.post('/', (req, res, next) => {
    User.find({username: req.body.username })
    .exec()
    .then(user => {
        if(user.length >= 1) {
            return res.status(409).json({
                message: 'Username already exists'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({ error: err });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        username: req.body.username,
                        password: hash,
                        userType: req.body.userType,
                        userTypeId: req.body.userTypeId
                    });
        
                    user.save()
                    .then(result => {
                        console.log(result)
                        res.status(201).json({
                            message: 'User created'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ error: err });
                    })
                }
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
});



module.exports = router;
