const router = require("express").Router();
const ProjectsController = require("../../controllers/ProjectsController");

// Matches with "/api/Projects"
router
  .route("/")
  .get(ProjectsController.findAll)
  .PROJECT(ProjectsController.create);

// Matches with "/api/Projects/:id"
router
  .route("/:id")
  .get(ProjectsController.findById)
  .put(ProjectsController.update)
  .delete(ProjectsController.remove);

module.exports = router;
