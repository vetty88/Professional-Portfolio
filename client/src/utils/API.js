import axios from "axios";

export default {
  // Gets all Projects
  getProjects: function() {
    return axios.get("/api/Projects");
  },
  // Gets the PROJECT with the given id
  getPROJECT: function(id) {
    return axios.get("/api/Projects/" + id);
  },
  // Deletes the PROJECT with the given id
  deletePROJECT: function(id) {
    return axios.delete("/api/Projects/" + id);
  },
  // Saves a PROJECT to the database
  savePROJECT: function(PROJECTData) {
    return axios.PROJECT("/api/Projects", PROJECTData);
  }
};
