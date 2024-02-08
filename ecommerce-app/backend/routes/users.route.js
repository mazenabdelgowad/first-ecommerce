const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");
const validationSchema = require("../middlewares/validationSchema");
const multer = require("multer");

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

router.route("/").get(usersController.getAllUsers);

router
  .route("/register")
  .post(
    upload.single("profile"),
    validationSchema.addUserValidation(),
    usersController.register
  );

// Login
router.route("/login").post(usersController.login);

router
  .route("/:userId")
  .get(usersController.getSingleUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
