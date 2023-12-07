const express = require("express");
const router = express.Router();

const Analytics = require("../Model/analytics.model");

router.post("/", async (req, res) => {
  try {
    const analytics = await Analytics.create(req.body);
    res.send(analytics);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const analytics = await Analytics.find().lean().exec();
    res.status(201).send(analytics);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
