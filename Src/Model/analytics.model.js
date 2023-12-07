const mongoose = require("mongoose");

const analyticSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("analytics", analyticSchema);
