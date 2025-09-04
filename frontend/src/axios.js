import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://task-manager-l2i3.onrender.com/api", // Replace with your backend URL if deployed
});

export default axiosInstance;
