const { body } = require("express-validator");
// product validation
const BRAND_NAME_MIN_LENGTH = 3;
const PRODUCT_NAME_MIN_LENGTH = 7;
const PRODUCT_DESCRIPTION_MIN_LENGTH = 25;
const addProductValidation = () => {
  return [
    body("productName")
      .trim()
      .notEmpty()
      .withMessage("Product name is required")
      .isLength({ min: PRODUCT_NAME_MIN_LENGTH })
      .withMessage(`product name has min length ${PRODUCT_NAME_MIN_LENGTH}`),
    body("description")
      .trim()
      .notEmpty()
      .withMessage("Product description is required")
      .isLength({ min: PRODUCT_DESCRIPTION_MIN_LENGTH })
      .withMessage(
        `description has min length ${PRODUCT_DESCRIPTION_MIN_LENGTH}`
      ),
    body("brandName")
      .trim()
      .notEmpty()
      .withMessage("Product brand name is required")
      .isLength({ min: BRAND_NAME_MIN_LENGTH })
      .withMessage(`brand name has min length ${BRAND_NAME_MIN_LENGTH}`),
    body("price").notEmpty().withMessage("Product price is required"),
    // .not()
    // .isString()
    // .withMessage("Product price must be a number"),
    body("quantity").notEmpty().withMessage("Product quantity is required"),
    // .not()
    // .isString()
    // .withMessage("Product quantity must be a number"),
  ];
};
const USER_REGEX = /^[A-z][A-z0-9-_" "]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const addUserValidation = () => {
  return [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("name is required")
      .matches(USER_REGEX)
      .withMessage("name has at least 4 characters"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("write a valid email address"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("password is required")
      .matches(PWD_REGEX)
      .withMessage(
        "8 to 24 characters. Must inclued an uppercase, lowercase letters, a number,and a special character.Allowed special characters: @ # $ %"
      ),
  ];
};

module.exports = {
  addProductValidation,
  addUserValidation,
};
