const Product = require("../models/prduct.model");
const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");
const asyncWrapper = require("../middlewares/asyncWrapper");
const { validationResult } = require("express-validator");

const getAllProducts = asyncWrapper(async (req, res, next) => {
  const products = await Product.find({}, { __v: false });
  if (!products) {
    const error = appError.create(
      "something get wrong, please reload the page",
      400,
      httpStatusText.ERROR
    );
    return next(error);
  }
  return res
    .status(200)
    .json({ status: httpStatusText.SUCCESS, data: { products } });
});

const getSingleProdut = asyncWrapper(async (req, res, next) => {
  const product = await Product.findById(req.params.productId);

  if (!product) {
    const error = appError.create(
      "can not find product",
      404,
      httpStatusText.ERROR
    );
    return next(error);
  }
  res.status(200).json({
    status: httpStatusText.SUCCESS,
    data: { product },
  });
});

const addProduct = asyncWrapper(async (req, res, next) => {
  const { productName, description, brandName, price, quantity } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = appError.create(errors.array(), 400, httpStatusText.FAIL);
    return next(error);
  }
  const newProduct = new Product({
    productName,
    description,
    brandName,
    price,
    quantity,
    avatar: req.file.filename,
  });
  await newProduct.save();

  // SUCCESS
  return res
    .status(201)
    .json({ status: httpStatusText.SUCCESS, data: { newProduct } });
});

const updateProduct = asyncWrapper(async (req, res, next) => {
  const productId = req.params.productId;
  const product = await Product.updateOne(
    { _id: productId },
    {
      $set: { ...req.body },
    }
  );
  if (!product) {
    const error = appError.create(
      "can not update product",
      400,
      httpStatusText.ERROR
    );
    return next(error);
  }
  return res
    .status(200)
    .json({ status: httpStatusText.SUCCESS, data: { product } });
});

const deleteProduct = asyncWrapper(async (req, res, next) => {
  const productId = req.params.productId;
  const deletedProduct = await Product.deleteOne({ _id: productId });
  if (deletedProduct.deletedCount !== 1) {
    const error = appError.create(
      "product does not exist",
      400,
      httpStatusText.ERROR
    );
    return next(error);
  }
  return res
    .status(200)
    .json({ status: httpStatusText.SUCCESS, data: { deleteProduct } });
});

module.exports = {
  getAllProducts,
  getSingleProdut,
  addProduct,
  updateProduct,
  deleteProduct,
};
