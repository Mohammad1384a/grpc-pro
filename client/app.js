const express = require("express");
const app = express();
const { indexRouter } = require("./routers/index.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRouter);
app.listen(3000, () => {
  console.log("client listening on port 3000");
});
