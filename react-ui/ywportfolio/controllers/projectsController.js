const db = require("../models");

// Defining methods for the projectsController
module.exports = {
    findAll: function(req, res) {
        db.Project.find(req.query)
     
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Project.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    }
};