const router = require("express").Router();
const PROJECTRoutes = require("./Projects");

// PROJECT routes
router.use("/Projects", PROJECTRoutes);

module.exports = router;
