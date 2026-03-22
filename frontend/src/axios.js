// ../frontend/src/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.MODE ===  "http://localhost:5000/api"
      )
});

export default axiosInstance;
