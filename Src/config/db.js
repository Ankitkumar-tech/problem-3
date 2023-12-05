const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://root:Ankit@cluster0.bgagayd.mongodb.net/Reidnax"
  );
};

module.exports = connect;
