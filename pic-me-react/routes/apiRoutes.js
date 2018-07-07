const path = require("path");
const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/PicMedb"
);

// API Routes
router.get("/gifs", (req, res) => {
    axios
        .get("https://api.giphy.com/v1/gifs/search?q=funny&api_key=dc6zaTOxFJmzC&limit=1")
        .then(function(res) {

            console.log(res.data.data);

            const singleGif = 
                {
                    url: res.data.data[0].url,
                    caption: "",
                    likeCount: ""
                }
            
            console.log(singleGif);
            db.Photos.create(singleGif)
        })
        .catch(err => {
            console.error(err);
        })
})

// router.use("/", function(req, res){
//     res.sendfile(/*index goes here*/)
// });

// router.put('/addPhotoComment', PhotosController.createComment)
module.exports = router;