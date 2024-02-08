const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");
const validationSchema = require("../middlewares/validationSchema");
const multer = require("multer");
const { verifiyToken } = require("../middlewares/verifiyToken");
const allowedTo = require("../middlewares/allowedTo");
const userRoles = require("../utils/roles");
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const fileName = `user-${Date.now()}.${ext}`;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const fileType = file.mimetype.split("/")[0];
  if (fileType === "image") {
    return cb(null, true);
  } else {
    const error = appError.create(
      "only images allowed",
      400,
      httpStatusText.ERROR
    );
    return cb(error, false);
  }
};
const upload = multer({ storage: diskStorage, fileFilter });

router
  .route("/")
  .get(productsController.getAllProducts)
  .post(
    verifiyToken,
    allowedTo(userRoles.ADMIN),
    upload.single("avatar"),
    validationSchema.addProductValidation(),
    productsController.addProduct
  );

router
  .route("/:productId")
  .get(productsController.getSingleProdut)
  .patch(
    verifiyToken,
    allowedTo(userRoles.ADMIN),
    productsController.updateProduct
  )
  .delete(
    verifiyToken,
    allowedTo(userRoles.ADMIN),
    productsController.deleteProduct
  );

module.exports = router;
