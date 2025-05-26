
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
// const { globalErrorHandler } = require("./src/utils/globalErrorhandler");
require("dotenv").config(); 


const connectDB = require("./src/config/dbConnect"); 
const userRoutes = require("./src/routes/userRoutes");
const companyRoutes = require("./src/routes/companyRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(globalErrorHandler);


// Enable CORS with credentials

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,              
  })
);

// app.use(cors());

connectDB();

// API Routes
app.use("/users", userRoutes);
app.use("/api/companies", companyRoutes);

// Server start
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
