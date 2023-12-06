const mongoose = require("mongoose");
// mongodb+srv://Ankit:<password>@cluster0.bgagayd.mongodb.net/
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://root:Ankit@cluster0.bgagayd.mongodb.net/Reidnax"
  );
};

module.exports = connect;
