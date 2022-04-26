// Require modules
const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/productController.js");

// Initialize routers
const router = express.Router();

// Initialize routes
router.route("/products").get(getAllProducts);
router.route("/product/new").get(createProduct);

// Export route
module.exports = router;