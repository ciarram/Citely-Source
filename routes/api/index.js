const router = require("express").Router();
const authRoutes = require("./auth");
const projectsRoutes = require("./projects");

// Auth routes
router.use("/auth", authRoutes);
// Book routes
router.use("/projects", projectsRoutes);

module.exports = router;
