const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const User = require('../data-models/user');

router.get('/', (req, res, next) => {
    User.find()
    .select('-__v')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            users: docs.map(doc => {
                return {
                    username: doc.username,
                    password: doc.password,
                    userType: doc.userType,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/api/users/" + doc._id
                    }
                }
            })
        };

        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
});


router.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username })
    .exec()
    .then(user =>{
        if(user.length < 1){
            return res.status(401).json({
                message: 'Auth Failed'
            });
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: 'Auth Failed'
                });
            }
            if (result) {
                const tokn = jwt.sign({
                    username: user.username,
                    userId: user._id
                }, process.env.JWT_KEY, 
                {  
                    expiresIn: "1h"
                }
                )
                return res.status(200).json({
                    message: 'Auth Successful'
                });
            }
            return res.status(401).json({
                message: 'Auth Failed',
                token: token
            
            });
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

router.delete('/:userId', (req, res, next) => {
    User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
        result.status(200).json({
            message: 'User deleted'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
});


module.exports = router;
