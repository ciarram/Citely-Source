const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects", must include in URL
//use when creating new project -- on click of  new project button in form
router.route("/newproject")
.post(projectController.create);
//use when creating a new book quote -- on click of new book quote button in form 
router.route("/newbquote")
.post(projectController.createbquote);
//use when creating a new article quote -- on click of new article quote button in form 
router.route("/newartquote")
.post(projectController.createartquote);
//use when creating a new outline -- on click of new outline item button in/near text area 
router.route("/newoutline")
.post(projectController.createoutline);
//don't think we need this one - but keeping it around just in case.
router.route("/:id")
.get(projectController.findById)    

//**ROUTE THAT BRINGS US TO PROJECTS PAGE**
//use when bringing up all projects that belong to a user -- have to figure out how to address this on front end because I am unclear how the ":id" works when it's not specifically referenced in the url. It might be best to hard code a user here.
router.route("/projects/:id")
.get(projectController.findAll)

//**ROUTE THAT BRINGS US TO HOME PAGE**
//use this to reach just one project - this should route us to our homepage. Once again , unsure of how ":id" translates to the front end so we will test it. We can always hardcode here too. 
router.route("/home/:id")
.get(projectController.findAllInProject)
.post(projectController.createbquote)
.put(projectController.updatebookq)
.delete(projectController.deletebookq);

//delete project
router.route("/home/:id/deleteproject")
.delete(projectController.deleteproject);


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
