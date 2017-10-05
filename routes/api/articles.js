const router = require("express").Router();
const Article = require("../../models/Article");

// Matches with "/api/books"
router.route("/")
  .get(Article.findAll)
  .post(Article.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(Article.findById)
  .put(Article.update)
  .delete(Article.remove);

module.exports = router;