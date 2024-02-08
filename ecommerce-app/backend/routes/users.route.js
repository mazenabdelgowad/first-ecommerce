const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.route("/").get(usersController.getAllUsers);

router
  .route("/:userId")
  .get(usersController.getSingleUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
