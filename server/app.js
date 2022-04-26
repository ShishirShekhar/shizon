// Require modules
const express = require("express");

// Route imports
const product = require("./routes/productRoute");

// Initialize app
const app = express();

app.use("/api/v1", product);

// Export app
module.exports = app;
