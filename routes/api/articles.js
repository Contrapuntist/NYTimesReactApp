const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articlesave"
// router.post("/", function(req, res) { 
//   console.log(req.body);
//   articlesController.create(req.body);
// }); 

router.route("/")
  .post(articlesController.create);

module.exports = router;