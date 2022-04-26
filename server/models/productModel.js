// Require modules
const mongoose = require("mongoose");

// create product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"]
    },
    description: {
        type: String,
        required: [true, "Please enter the product description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
        maxlength: [8, "Price cannot exceed 8 figures"]
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter the product category"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter the product stock"],
        maxlength: [4, "Price cannot exceed 4 figures"],
        default: 1
    },
    numOfReviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// export product model
module.exports = mongoose.model("Product", productSchema);
