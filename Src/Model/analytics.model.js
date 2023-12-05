const mongoose = require("mongoose");

const analyticSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("analytics", analyticSchema);
