const { productModel } = require("./config/product.model");

async function productList(call, callback) {
  try {
    const products = await productModel.find({});
    return callback(null, { products });
  } catch (error) {
    console.log(error);
    return callback(error, null);
  }
}
async function deleteProduct(call, callback) {}
async function updateProduct(call, callback) {}
async function getProduct(call, callback) {
  try {
    const { id } = call.request;
    const product = await productModel.findOne({ id });
    if (!product)
      return callback(null, { status: 400, message: "not found product" });
    return callback(null, product);
  } catch (error) {
    console.log(error);
    return callback(error);
  }
}
async function createProduct(call, callback) {
  try {
    const { title, price } = call.request;
    const id = Math.floor(Math.random() * 10000);
    await productModel.create({ title, price, id });
    return callback(null, { status: 200, message: "success" });
  } catch (error) {
    console.log(error);
    return callback(error, null);
  }
}

module.exports = {
  productList,
  deleteProduct,
  updateProduct,
  getProduct,
  createProduct,
};
