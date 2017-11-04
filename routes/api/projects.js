const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/books"
router.route("/home")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
