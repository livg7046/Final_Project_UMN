const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: (req, res) => {
    db.Photos
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

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