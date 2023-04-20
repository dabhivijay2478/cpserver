const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/useschema");
dotenv.config({ path: "./config.env" });
const authMiddleware = async (req, res, next) => {
  try {
    // const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = authMiddleware;
