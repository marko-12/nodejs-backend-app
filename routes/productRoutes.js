import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/Product.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findAll();
    res.send(product);
  })
);

export default productRouter;
