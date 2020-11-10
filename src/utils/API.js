import axios from "axios";

export default {
  // Gets all Projects
  getProjects: function() {
    return axios.get("/api/Projects");
  }
};
