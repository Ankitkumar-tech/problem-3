const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("data", dataSchema);
