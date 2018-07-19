const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../models/User");

// Register new user
router.post('/register', function(req, res) {
    console.log("=========");
    console.log(req.body);
    if (!req.body.userName || !req.body.password) {
        res.json({success: false, msg: 'Please enter username and password!'});
    } else {
        const newUser = new User({
            userName: req.body.userName,
            password: req.body.password,
            url: req.body.url
        });
    // save the user
    // newUser.create(function(err) {
    //     if (err) {
    //         return res.json({success: false, msg: 'Username already exists.'});
    //     }
    //     res.json({success: true, msg: 'Successful created new user.'});
    // });
    User.create(newUser)
        .then(function(dbNote) {
            return res.json({Success: true})
        })
    }
});

// Sign-in
router.post('/login', function(req, res) {
    User.findOne({
        userName: req.body.userName
    }, function(err, user) {
        console.log(user);
        if (err) throw err;

        if (!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    const token = jwt.sign(user.toJSON(), settings.secret);
                    // return the information including token as JSON
                    res.json({success: true, token: 'JWT ' + token});
                } else {
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
});

module.exports = router;