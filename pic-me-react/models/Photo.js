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
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()

    },
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo; 