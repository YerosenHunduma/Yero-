const User = require("../Models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.send({ success: false, message: "User already exists" });
    }

    salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ name, email, password: hashedPassword });
    newUser.save();
    res.send({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.send({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.send({ success: false, message: "Invalid Crediantial" });
    }
    token = jwt.sign({ userId: user.id }, process.env.Secret_key, {
      expiresIn: "1d",
    });
    return res.send({
      success: true,
      message: "User logged in  successfully",
      data: token,
    });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.body.userId;
    console.log("userId", userId);
    const user = await User.findById(userId);
    console.log("user444444444444444444", user);
    res.send({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { register, login, getUser };
