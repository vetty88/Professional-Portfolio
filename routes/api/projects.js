const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/projects"
router
  .route("/")
  .get(projectsController.findAll);


// Matches with "/api/projects/:id"
router
  .route("/:name")
  .get(projectsController.findByName);



module.exports = router;
