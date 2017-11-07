import axios from "axios";

export default {

//create new project and save to db
  createProject: function(newProject) {
    console.log("reaching createProject front end")
    return axios.post("/api/projects/newproject", newProject);
  },
//create new book quote and save to db
  createbQuote: function(newbookquote) {
    console.log("reaching createbQuote front end")
    return axios.post("/api/projects/home/:id", newbookquote);
  },
//create new article quote and save to db
  createArtQuote: function(newartquote) {
    console.log("reaching createArtQuote front end")
    return axios.post("/api/projects/newbquote", newartquote);
  },
  //create new outline - not sure about this route but I think we need it to save info to db.
  createOutline: function(newoutline) {
    console.log("reaching createOutline front end")
    return axios.post("/api/projects/newoutline", newoutline);
  },
  // Gets all the projects with the given user id --not sure about the id param in route file, must test on front end
  getProjects: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the book with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a book to the database

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
};

  // getProjects: function() {
  //   return axios.get("/api/projects/:id");
  // },

  // saveProject: function(projectData) {
  //   return axios.post("/api/projects", projectData);
  // },
