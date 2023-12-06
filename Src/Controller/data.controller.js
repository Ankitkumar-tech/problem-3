const express = require("express");
const router = express.Router();
const Data = require("../Model/data.model.js");
router.post("/", async (req, res) => {
  try {
    const data = await Data.create(req.body);
    res.send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Data.find().lean().exec();
    res.status(201).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
