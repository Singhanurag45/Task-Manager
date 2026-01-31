// ../frontend/src/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  // ✅ Automatically switches based on where the app is running
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api" // Use local backend when running "npm run dev"
      : "https://task-manager-l2i3.onrender.com/api", // Use Render backend when deployed
});

export default axiosInstance;
