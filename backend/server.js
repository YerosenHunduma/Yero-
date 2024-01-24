require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { rootRoutes } = require("./routes");
require("./config/Dbconfig");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(rootRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
