import axios from "axios";

export default {
  // Gets All Projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the Project with the given id
  getProject: function(name) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the Project with the given id
  deleteProject: function(name) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a Project to the database
  saveProject: function(ProjectData) {
    return axios.Project("/api/projects", ProjectData);
  }
};
