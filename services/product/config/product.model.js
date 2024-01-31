const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  price: { type: String },
});

// productSchema.pre("save", (next) => {
//   const self = this;
//   self.constructor.count(async function (err, data) {
//     if (err) return next(err);
//     self.set({ id: data + 1 });
//     return next();
//   });
// });

const model = mongoose.model("grpc", productSchema);

module.exports = {
  productModel: model,
};
