const router = require("express").Router();
const { productRouter } = require("./product.router");

router.use("/product", productRouter);

module.exports = {
  indexRouter: router,
};
