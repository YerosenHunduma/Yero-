const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    image: {
      type: Array,
      default: [],
      required: true,
    },
    bill_available: {
      type: Boolean,
      default: false,
      required: true,
    },
    warranty_available: {
      type: Boolean,
      default: false,
      required: true,
    },
    delivery_available: {
      type: Boolean,
      default: false,
      required: true,
    },
    accessories_available: {
      type: Boolean,
      default: false,
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
