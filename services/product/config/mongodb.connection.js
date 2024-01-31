const { default: mongoose } = require("mongoose");

module.exports = mongoose
  .connect(
    "mongodb+srv://abedinimcf:PrDXL4ZA333KPLbS@cluster0.gwmmjfc.mongodb.net/grpc"
  )
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log(err.message);
  });
