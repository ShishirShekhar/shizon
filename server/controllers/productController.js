// Require modules
const Product = require("../models/productModel");

// Create product -- Admin
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(200).json({
        success: true,
        product
    });
};

// Get all products
exports.getAllProducts = (req, res) => {
    res.status(200).json({message: "Route is working properly"});
};
