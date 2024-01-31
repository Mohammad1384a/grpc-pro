const router = require("express").Router();
const {
  productList,
  createProduct,
  deleteProduct,
  getProductById,
  updateProduct,
} = require("../controllers/product.controller");

router.get("/list", productList);
router.get("/create", createProduct);
router.get("/:id", getProductById);

module.exports = {
  productRouter: router,
};
