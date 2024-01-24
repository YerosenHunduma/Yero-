const mongoose = require("mongoose");

mongoose.connect(process.env.Mongo_url);

const db = mongoose.connection;

db.on("Connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.log(err);
});

module.exports = db;
