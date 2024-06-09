const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

// create new product => /api/v1/admin/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  // let images = []
  // if (typeof req.body.images === 'string') {
  //     images.push(req.body.images)
  // } else {
  //     images = req.body.images
  // }

  // let imagesLinks = [];

  // for (let i = 0; i < images.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //         folder: 'products'
  //     });

  //     imagesLinks.push({
  //         public_id: result.public_id,
  //         url: result.secure_url
  //     })
  // }

  // req.body.images = imagesLinks;
  // req.body.user = req.user.id;

  const product = await Product.create(req.body);

  return res.status(201).json({
    success: true,
    product,
  });
});

// get all products => /api/v1/products?keyword=apple
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const productCount = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);

  const products = await apiFeatures.query;
  return res.status(200).json({
    success: true,
    message: "This route will show all products in database.",
    count: products.length,
    productCount,
    data: products,
  });
});

// get single product details => /api/v1/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "Product found",
    data: product,
  });
});

// update product => /api/v1/admin/product/:id
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product not found`,
    });
    return next(new ErrorHandler("Product not found", 400));
  }

  return res.status(200).json({
    success: true,
    message: "Product updated",
    data: product,
  });
});

// delete product => /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "Product deleted",
    data: null,
  });
});
