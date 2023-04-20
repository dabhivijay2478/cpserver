const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });
const app = express();
require("./db/connect");
const User = require("./models/useschema");
app.use(express.json());
//Middelware
app.use(require("./router/auth"));
app.use(require("./router/adduser"));
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("vijay");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});



