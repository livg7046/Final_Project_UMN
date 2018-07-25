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
        // Photo.find(req.query, function (err, photos) {
        //     console.log("=== Getting All Photos ===")
        //     if (err) return next(err);
        //     res.json(photos);
        // });

        Photo
        .find(req.query)
        .sort({ likes: -1 })
        .then(photos => res.json(photos))

    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Save photo
router.post('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
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

// Edit photo
router.put('/:id', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        Photo.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, photo) {
            console.log("=== Updating photo ===")

        })
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Get User photos
router.get('/:userId', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        Photo.find({userId: req.params.userId }, function(err, photos) {
            console.log("=== Get User Images ===")
            console.log(photos);
            if (err) return next(err);
            res.json(photos);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Get all photo comments
router.get('/:id/comments', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        console.log("=== Get Comments ===")
        Photo.find({_id: req.params.id})
        .populate('comments')
        .then(function(comments) {
            console.log(comments);
            res.json(comments);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Save comment to photo
router.post('/:id/comments', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        console.log("=== Save Comments ===");
        Comment.create(req.body)
        .then(function(dbComment) {
            return Photo.findOneAndUpdate({_id: req.params.id}, {$push: {comments: dbComment._id}}, {new: true})
        })
        .then(function(dbPhoto) {
            res.json(dbPhoto);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Edit comment
router.put('/:id/comments', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        // code
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
}); 

// Delete comment
router.delete('/:id/comments', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        // code
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

getToken = headers => {
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