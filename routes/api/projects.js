const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects", must include in URL

//**ROUTE THAT BRINGS US TO PROJECTS PAGE**
//use when bringing up all projects that belong to a user -- have to figure out how to address this on front end because I am unclear how the ":id" works when it's not specifically referenced in the url. It might be best to hard code a user here.
router.route("/projects")
.get(projectController.findAll)
//use when creating new project -- on click of  new project button in form; need to redirect to home page at this point (done in React with push)
.post(projectController.create)
.delete(projectController.deleteproject);

//**ROUTE THAT BRINGS US TO HOME PAGE**
//use this to reach just one project - this should route us to our homepage. Once again , unsure of how ":id" translates to the front end so we will test it. We can always hardcode here too. 
router.route("/home")
.get(projectController.findAllInProject)
// .post(projectController.createbquote)
// .post(projectController.createoutline)
.put(projectController.updatebookq)
.delete(projectController.deletebookq);

//---------------------------------------
//hoping all we need is above code, but keeping code below in case we need to separate any routes. 
//---------------------------------------


//use when creating a new book quote -- on click of new book quote button in form 
// router.route("/newbquote")
// .post(projectController.createbquote);
//---------------------------------------
//use when creating a new article quote -- on click of new article quote button in form 
// router.route("/newartquote")
// .post(projectController.createartquote);
//---------------------------------------
//use when creating a new outline -- on click of new outline item button in/near text area 
// router.route("/newoutline")
// .post(projectController.createoutline);
//---------------------------------------
//don't think we need this one - but keeping it around just in case.
// router.route("/:id")
// .get(projectController.findById)    
//---------------------------------------
//delete project
// router.route("/home/:id/deleteproject")
// .delete(projectController.deleteproject);
//---------------------------------------
// router.route("/home")
//   .get(projectController.findAll)
//   .post(projectController.create);
//---------------------------------------
//router.route("/newproject")

module.exports = router;
