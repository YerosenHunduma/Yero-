const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.CLoud_API_key,
  api_secret: process.env.Cloud_API_secret,
});

module.exports = cloudinary;
