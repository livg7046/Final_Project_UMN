const db = require("../models");

// Defining methods for the articleController
module.exports = {
    getUserSubOfTheDay: (req, res) => {
        db.Photo
            .find(req.query)
            .sort()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getUserActivityOfTheDay: function(req, res) {
        db.Photo
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};