var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

var PhotosSchema = new Schema({
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


module.exports = PhotosSchema; 