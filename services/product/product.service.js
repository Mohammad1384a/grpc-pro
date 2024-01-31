require("./config/mongodb.connection");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const protoPath = "../../protos/product.proto";
const productProto = protoLoader.loadSync(protoPath);
const { ProductPackage } = grpc.loadPackageDefinition(productProto);
const {
  createProduct,
  deleteProduct,
  getProduct,
  productList,
  updateProduct,
} = require("./product.grpc");

function initializer() {
  const server = new grpc.Server();
  server.addService(ProductPackage.ProductService.service, {
    deleteProduct,
    createProduct,
    getProduct,
    productList,
    updateProduct,
  });
  server.bindAsync(
    "localhost:3001",
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) return console.log(err);
      console.log("running on port ", port);
      server.start();
    }
  );
}

initializer();
