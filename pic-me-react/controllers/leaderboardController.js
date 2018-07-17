const db = require("../models");

// Defining methods for the articleController
module.exports = {
    loadSubOfTheDay: (req, res) => {
        db.Photo
            .find(req.query)
            .sort()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getComments: function(req, res) {
        db.Photo
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getLikes: function(req, res) {
        db.Photo
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeSubsOfTheDay: function(req, res) {
        db.Photo
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};