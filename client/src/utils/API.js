import axios from "axios";

export default {
  getSetlists: function () {
    return axios.get("/api/setlists");
  },
  addSetlist: function (obj) {
    console.log(obj)
    return axios.post("/api/setlists", obj);
  },
  getSongs: function () {
    return axios.get("/api/songs");
  },
  addUser: function (obj) {
    return axios.post("/api/users", obj);
  },
  getUsers: function () {
    return axios.get("/api/users");
  },
  authUser: function () {
    return axios.post("/api/auth");
  },
  getUser: function () {
    axios.get("/api/auth/user");
  }
};