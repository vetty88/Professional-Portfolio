const db = require("../models");

// Defining methods for the projectsController
module.exports = {
  findAll: function(req, res) {
    db.Projectfind(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.ProjectfindById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
