const router = require("express").Router();
const authMiddleWares = require("../Middlewares/authMiddleWares");
const { register, login, getUser } = require("../controllers/authsControllers");

router.post("/register", register);
router.post("/login", login);
router.get("/getUser", authMiddleWares, getUser);

module.exports.authsRoutes = router;
