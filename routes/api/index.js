const router = require("express").Router();
const articlesRoutes = require("./articles");

// articles routes
router.use("/", articlesRoutes);

module.exports = router;