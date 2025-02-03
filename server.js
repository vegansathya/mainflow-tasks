const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Ensure dotenv is imported at the top

const app = express();
app.use(express.json());
app.use(cors());

const counterRoutes = require("./routes/counterRoutes");
app.use("/api/counter", counterRoutes);

// Ensure the environment variable is correctly loaded

console.log("MongoDB URI:", process.env.MONGO_URI)
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("MONGO_URI is not defined. Please check your .env file.");
  process.exit(1);
}

// MongoDB connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
