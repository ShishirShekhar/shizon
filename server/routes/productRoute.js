// Require modules
const express = require("express");
const { getAllProducts } = require("../controllers/productController.js");

// Initialize routers
const router = express.Router();

// Initialize routes
router.route("/products").get(getAllProducts);

// Export route
module.exports = router;