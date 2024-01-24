const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header("authorization").split(" ")[1];
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.Secret_key);
    console.log(decodedToken.userId);
    req.body.userId = decodedToken.userId;

    next();
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
