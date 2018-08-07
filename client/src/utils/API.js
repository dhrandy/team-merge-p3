import axios from "axios";

export default {
  getUserData: (email) => axios.get("/api/getUserData/"+email)
};