const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // ✅ No need for useNewUrlParser or useUnifiedTopology in Mongoose v6+
      // You can still add dbName if your URI doesn't specify one
      dbName: "myDatabase" // optional, only if not included in URI
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
