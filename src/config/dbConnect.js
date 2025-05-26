require('dotenv').config();
const mongoose = require("mongoose");

// Use environment variable from .env file
const mongoURL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Superlative";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      // useUnifiedTopology: true, // optional in modern versions
    });

    console.log(" Connected to MongoDB");
  } catch (err) {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1); 
  }

  mongoose.connection.on("disconnected", () => {
    console.log(" MongoDB disconnected");
  });
};

module.exports = connectDB;
