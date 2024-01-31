const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "../../protos/product.proto");
const productProto = protoLoader.loadSync(protoPath);
const { ProductPackage } = grpc.loadPackageDefinition(productProto);
const productClient = new ProductPackage.ProductService(
  "localhost:3001",
  grpc.credentials.createInsecure()
);

function productList(req, res, next) {
  productClient.productList(null, (err, data) => {
    if (err) return console.log(err);
    return res.json(data);
  });
}
function getProductById(req, res, next) {
  const { id } = req.params;
  productClient.getProduct({ id }, (err, data) => {
    if (err) return console.log(err);
    return res.json(data);
  });
}
function createProduct(req, res, next) {
  const { title, price } = req.query;
  productClient.createProduct({ title, price }, (err, data) => {
    if (err) return console.log(err);
    return res.json(data);
  });
}
function updateProduct(req, res, next) {}
function deleteProduct(req, res, next) {}

module.exports = {
  productList,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
