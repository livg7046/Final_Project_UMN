const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const PhotoSchema = new Schema({
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
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    // user: {
    //     username: String, 
    //     require: true
    // }
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo; 