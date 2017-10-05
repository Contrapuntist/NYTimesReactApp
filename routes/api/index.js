const router = require("express").Router();
const articlesRoutes = require("./articles");

// articles routes
router.use("/savearticle", articlesRoutes);

module.exports = router;