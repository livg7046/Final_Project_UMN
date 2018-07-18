const db = require("../models");

// Defining methods for the articleController
module.exports = {

    submitAnswer: function(req, res) {
        db.Photo
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

};