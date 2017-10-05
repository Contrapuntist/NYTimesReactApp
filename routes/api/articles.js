const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articlesave"
router.route("/api/savearticle")
  .post(articlesController.create);

module.exports = router;