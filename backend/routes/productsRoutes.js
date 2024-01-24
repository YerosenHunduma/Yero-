const router = require("express").Router();
const multer = require("multer");
const authMiddleWares = require("../Middlewares/authMiddleWares");
const {
  addProducts,
  getProducts,
  updateProduct,
  deleteProduct,
  uploadImage,
  storage,
} = require("../controllers/productControllers");

router.post("/addProducts", authMiddleWares, addProducts);
router.get("/getProducts", authMiddleWares, getProducts);
router.put("/updateProduct/:id", authMiddleWares, updateProduct);
router.delete("/deleteProduct/:id", authMiddleWares, deleteProduct);
router.post(
  "/uploadImage",
  authMiddleWares,
  multer({ storage: storage }).single("file"),
  uploadImage
);

module.exports.productRoutes = router;
