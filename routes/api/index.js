const router = require("express").Router();
const articlesRoutes = require("./articles");

// articles routes
router.use("/savedarticles", articlesRoutes);

module.exports = router;