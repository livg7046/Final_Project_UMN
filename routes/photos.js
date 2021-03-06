const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo.js');
const User = require("../models/User");
const Comment = require('../models/Comment.js');
const passport = require('passport');
require('../config/passport')(passport);

// Get all photos
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    var token = getToken(req.headers);
    if (token) {
        console.log("=== Getting All Photos ===")
        Photo
        .find(req.query)
        // .sort({ likes: -1 })
        .then(photos => res.json(photos))
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Save photo
router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var token = getToken(req.headers);
    if (token) {
        Photo.create(req.body, (err, post) => {
            console.log("==== Save Photo ====")
            // console.log(req.body);
            if (err) return next(err);
            res.json(post);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Edit photo
router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var token = getToken(req.headers);
    // console.log(req.body)
    if (token) {
        Photo.findOneAndUpdate({ _id: req.params.id }, req.body, (err, photo) => {
            console.log("=== Updating Photo ===")
                if (err) return next(err);

                res.json(photo)
            

        })
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

//Edit photo likes
router.put('/likes/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var token = getToken(req.headers);
    // console.log(req.body)
    if (token) {
        Photo.findOneAndUpdate({ _id: req.params.id }, {$push: {usersWhoLiked: req.body}}, (err, photo) => {
        // Photo.findOneAndUpdate({ _id: req.params.id }, {$inc: {likes: req.body}}, (err, photo) => {
            console.log("=== Updating Users Who Liked ===")
                if (err) return next(err);

                res.json(photo)
        })
        // .then(() => {
        //     Photo.findOneAndUpdate({_id: req.params.id } , req.body, (err, photo) => {
        //         console.log("=== Updating Like Amount ===")
        //             if (err) return next(err);

        //             res.json(photo)
        //     })
        // })
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Get User photos
router.get('/:userId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var token = getToken(req.headers);
    if (token) {
        Photo.find({userId: req.params.userId }, (err, photos) => {
            console.log("=== Get User Photos ===")
            // console.log(photos);
            if (err) return next(err);
            res.json(photos);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Get all photo comments
router.get('/:id/comments', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var token = getToken(req.headers);
    if (token) {
        console.log("=== Get Comments ===")
        Photo.find({_id: req.params.id})
        .populate('comments')
        .then(comments => {
            // console.log(comments);
            res.json(comments);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Save comment to photo
router.post('/:id/comments', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var token = getToken(req.headers);
    if (token) {
        console.log("=== Save Comments ===");
        Comment.create(req.body)
        .then(dbComment => {
            return Photo.findOneAndUpdate({_id: req.params.id}, {$push: {comments: dbComment._id}}, {new: true})
        })
        .then(dbPhoto => {
            res.json(dbPhoto);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Edit comment
router.put('/:id/comments', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var token = getToken(req.headers);
    if (token) {
        console.log("=== Updating Comment ===");
        Comment.findOneAndUpdate({_id: req.params.id }, req. body)
        .then(dbComment => {
            res.json(dbComment)
        })
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
}); 

// Delete comment
router.delete('/:id/comments', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var token = getToken(req.headers);
    if (token) {
        Comment.findById({_id: req.params.id})
        .then(dbComment => dbComment.remove())
        .then(dbComment => res.json(dbComment))
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

// Get user profile picture
router.get('/users/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
        User.find({_id: req.params.id }, (err, UserData) => {
            console.log("UserData: " + UserData)
            res.json(UserData)
        });
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