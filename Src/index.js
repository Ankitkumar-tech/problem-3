const express = require("express");
const cors = require("cors");
// require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());
const connect = require("./config/db");

app.listen(port, async function () {
  try {
    await connect();
    console.log(`Port ${port} is working fine`);
  } catch (error) {
    console.log("some error occur");
  }
});
