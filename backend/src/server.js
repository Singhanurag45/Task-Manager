import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "../routes/taskRoutes.js";

dotenv.config();
const app = express();

// ✅ Define allowed origins
const allowedOrigins = [
  "http://localhost:5173", // Local Frontend (Vite)
  "https://task-manager-alpha-blond-96.vercel.app", 
  "https://task-manager-git-main-anurag-singhs-projects-5f7d2241.vercel.app",
   "https://task-manager-bhsabj9bk-anurag-singhs-projects-5f7d2241.vercel.app" 
];

// ✅ Configure CORS
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true, // Allow cookies/headers
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// ✅ Handle Preflight OPTIONS requests
// This was causing your crash. We changed "*" to /(.*)/ to fix it.
app.options(/(.*)/, cors());

// Middleware
app.use(express.json());

// MongoDB Connection
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/TaskManager";

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/tasks", taskRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on Port ${PORT}`);
});
