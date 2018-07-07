
const db = require("../models");

// Defining methods for the articleController
module.exports = {
  createComment: function(req, res) {
    newComment = {
        userId: req.body.id,
        comment: req.body.commentText
    }
    db.Photos
        .update(newComment)
        .then(/*whatever response here*/)
  },
}