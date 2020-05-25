const User = require('../data-models/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

exports.users_get_all = (req, res, next) => {
    User.find()
    .select('-__v')
    .exec()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    })
}

exports.users_delete_user = (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'User deleted'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
}

exports.users_create_user = (req, res, next) => {
    User.find({ username: req.body.username })
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
                        res.status(201).json(result);
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
}

exports.users_login_user = (req, res, next) => {
    User.findOne({ username: req.body.username })
    .exec()
    .then(user =>{
        if(!user){
            return res.status(401); 
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                return res.status(401);
            }
            if (result) {
                const token = jwt.sign({
                    username: user.username,
                    userId: user._id,
                    userType: user.userType,
                }, process.env.JWT_KEY, 
                {  
                    expiresIn: "1h"
                }
                )
                return res.status(200).json({
                    user: user,
                    token: token
                });
            }
            return res.status(401);
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
}