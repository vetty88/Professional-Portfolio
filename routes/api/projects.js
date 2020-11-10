const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/Projects"
router
  .route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/Projects/:id"
router
  .route("/:id")
  .get(projectsController.findById)
  .put(projectsController.update)


module.exports = router;
