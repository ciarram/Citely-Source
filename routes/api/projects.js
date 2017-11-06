const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects", must include in URL
router.route("/newproject")
.post(projectController.create);

router.route("/newbquote")
.post(projectController.createbquote);

router.route("/newartquote")
.post(projectController.createartquote);

router.route("/newoutline")
.post(projectController.createoutline);

router.route("/:id")
.get(projectController.findById)


router.route("/allprojects/:id")
.get(projectController.findAll)


// router.route("/home")
//   .get(projectController.findAll)
//   .post(projectController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
