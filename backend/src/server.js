import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "../routes/taskRoutes.js";

dotenv.config();
const app = express();

// ✅ Allow frontend origins
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://task-manager-alpha-blond-96.vercel.app", // Vercel deployed frontend
];

app.use(
  cors({
    origin: allowedOrigins, // directly pass the array (simpler)
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


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
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});