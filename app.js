const express = require("express");
const cors = require("cors");
require("dotenv").config();   // ✅ load .env once
const connectDB = require("./database/mongoDB");

const app = express();

// MongoDB Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
