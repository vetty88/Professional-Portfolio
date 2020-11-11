import axios from "axios";

export default {
  // Gets All Projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the Project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  }
};
