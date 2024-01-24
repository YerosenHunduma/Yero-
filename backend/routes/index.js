const { authsRoutes } = require("./auths");
const { productRoutes } = require("./productsRoutes");

const router = require("express").Router();

router.use("/api/auths", authsRoutes);
router.use("/api/products", productRoutes);

module.exports.rootRoutes = router;
