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
    return axios.post("/api/auth/login", userData);
  },
  logout: function() {
    return axios.get("/auth/logout");
  },
  register: function(userData) {
    return axios.post("/api/auth/register", userData);
  },
};