// ../frontend/src/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "https://task-manager-l2i3.onrender.com/api"),
});

export default axiosInstance;
