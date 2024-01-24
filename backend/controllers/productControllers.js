const Product = require("../Models/productModel");
const cloudinary = require("../config/CloudinaryConfig");
const multer = require("multer");

const addProducts = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send({ success: true, message: "Product added successfully" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.send({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

// handle image upload to cloudinary

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const uploadImage = async (req, res, next) => {
  const { productId } = req.body;
  const file = req.file.path;
  console.log("pro,", productId, "file,", file);
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: "AMP",
    });
    await Product.findByIdAndUpdate(productId, {
      $push: { image: result.secure_url },
    });
    res.send({
      success: true,
      message: "Image uploaded successfully",
      data: result.secure_url,
    });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

module.exports = {
  addProducts,
  getProducts,
  updateProduct,
  deleteProduct,
  uploadImage,
  storage,
};
