const path = require("path");
const router = require("express").Router();
const PhotosController = require('../Controller/photosController')

// API Routes
router.use("/", function(req, res){
    res.sendfile(/*index goes here*/)
});

router.put('/addPhotoComment', PhotosController.createComment)