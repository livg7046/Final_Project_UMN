const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Photo = require('../models/Photo.js');
const passport = require('passport');
require('../config/passport')(passport);

// Get all photos
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        Photo.find(function (err, photos) {
            if (err) return next(err);
            res.json(photos);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Save photo
router.post('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        Photo.create(req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports = router;