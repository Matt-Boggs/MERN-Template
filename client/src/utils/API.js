import axios from "axios";

export default {
  // Gets all Mocks
  getMocks: function() {
    return axios.get("/api/mocks");
  },
  // Gets the Mock with the given id
  getMock: function(id) {
    return axios.get("/api/mocks/" + id);
  },
  // Deletes the Mock with the given id
  deleteMock: function(id) {
    return axios.delete("/api/mocks/" + id);
  },
  // Saves a Mock to the database
  saveMock: function(mockData) {
    return axios.post("/api/mocks", mockData);
  }
};
