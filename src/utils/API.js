import axios from "axios";

export default {
  // Gets All Projects
  getProjects: function() {
    return axios.get("/api/projects");
  }
};
