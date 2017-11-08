import axios from "axios";

export default {
//------------- PROJECTS PAGE
//create new project and save to db
  createProject: function(newProject) {
    console.log("reaching createProject front end", newProject)
    return axios.post("/api/projects/projects", newProject);
  },
// Gets all the projects with the given user id --not sure about the id param in route file, must test on front end
  getProjects: function() {
    return axios.get("/api/projects/projects");
    },

  // Deletes the project according to its id
  deleteProject: function(id) {
    return axios.delete("/api/projects/projects" + id);
  },
//------------- HOME PAGE
  getOneProject: function(id) {
    return axios.get("/api/projects/home" + id);
    },
//get all book quotes associated with project
  getAllBookQuotes: function() {
    return axios.get("/api/projects/home");
  },
//create new book quote and save to db--not sure how this should be set up 
  createbQuote: function(newbookquote) {
    console.log("reaching createbQuote front end")
    return axios.post("/api/projects/home", newbookquote);
  },
  //create new outline - not sure about this route but I think we need it to save info to db.
  createOutline: function(id, newoutline) {
    console.log("reaching createOutline front end")
    return axios.post("/api/projects/home" + id, newoutline);
  },
  //delete book quote
  deleteBQuote: function(id) {
    return axios.delete("/api/projects/home" + id);
  },
  //delete outline 
  deleteOutline: function(id) {
    return axios.delete("/api/projects/home" + id);
  },
  //WHAT TO DO WITH UDPATE??
//------------- ALL AUTH ROUTES BELOW 
  login: function(userData) {
    console.log("LOOKING FOR LOGIN INFO", userData)
    return axios.post("/api/auth/", userData);
  },
  logout: function() {
    console.log("I am logging out, but this console shows on login page bc this is where we reroute to on logout")
    return axios.get("api/auth/logout");
  },
  //When we make the nav bar, we just need to tweak the logout route. Assuming that on click we want the user to return to the login page, this path should work. Right now, when you login, you can manually put '/logout' in the url and it will bring you back to the login screen. //jm
  register: function(userData) {
    // console.log("inside register", userData.password) 
    return axios.post("/api/auth/register", userData);  //TEST got rid of /api at beginning of route
  },

//------------- article info if needed 
//create new article quote and save to db
createArtQuote: function(newartquote) {
  console.log("reaching createArtQuote front end")
  return axios.post("/api/projects/newbquote", newartquote);
  }
};

  // saveProject: function(projectData) {
  //   return axios.post("/api/projects", projectData);
  // },



