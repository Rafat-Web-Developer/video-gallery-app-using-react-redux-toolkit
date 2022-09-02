import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://learn-with-summit-server.herokuapp.com/",
});

export default axiosInstance;
