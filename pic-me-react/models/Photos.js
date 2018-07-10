const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const PhotosSchema = new Schema({
    url: {
        type: String, 
        require: true
    },
    caption: {
        type: String,
        require: true
    },
    likeCount: {
        type: Number,
        require: true
    },
    likes: {
        type: Array
    },
    reactions: {
        type: Array
    },
    comments: {
        type: Array
    }
});

const Photos = mongoose.model("Photos", PhotosSchema);

module.exports = Photos; 