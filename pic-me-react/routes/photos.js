const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo.js');
const Comment = require('../models/Comment.js');
const passport = require('passport');
require('../config/passport')(passport);

// Get all photos
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        Photo.find(function (err, photos) {
            console.log("=== Getting All Photos ===")
            if (err) return next(err);
            res.json(photos);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Save Image
router.post('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        console.log("TOKEN");
        console.log(req.body);
        Photo.create(req.body, function (err, post) {
            console.log("==== Save Image ====")
            console.log(req.body);
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Get User Images
router.get('/:userId', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    console.log("user")
    Photo.find({userId: req.params.userId }, function(err, photos) {
        console.log("=== Get User Images ===")
        console.log(photos);
        if (err) return next(err);
        res.json(photos);
    })
})

// Comments
// Get all
router.get('/:id/comments', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    console.log("getting comments")
    Photo.find({_id: req.params.id})
    .populate('comments')
    .then(function(comments) {
        console.log('comments');
        console.log(comments);
        res.json(comments);
    })
});

// Save comment
router.post('/:id/comments', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    console.log("saving comment");

    Comment.create(req.body)
        .then(function(dbComment) {
            return Photo.findOneAndUpdate({_id: req.params.id}, {$push: {comments: dbComment._id}}, {new: true})
        })
        .then(function(dbPhoto) {
            res.json(dbPhoto);
        })
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