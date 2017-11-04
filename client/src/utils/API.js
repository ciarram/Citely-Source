import axios from "axios";

export default {
  // Gets all books
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the book with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the book with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a book to the database
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },

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