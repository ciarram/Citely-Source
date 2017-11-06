const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects", must include in URL
//use when creating new project 
router.route("/newproject")
.post(projectController.create);
//use when creating a new book quote
router.route("/newbquote")
.post(projectController.createbquote);
//use when creating a new article quote
router.route("/newartquote")
.post(projectController.createartquote);
//use when creating a new outline
router.route("/newoutline")
.post(projectController.createoutline);

router.route("/:id")
.get(projectController.findById)

//use when bringing up all projects that belong to a user 
router.route("/allprojects/:id")
.get(projectController.findAll)

router.route("/oneproject/:id")
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
