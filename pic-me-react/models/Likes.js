const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    User: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
})

const Like = mongoose.model("Like", LikeSchema);

module.exports = Like;