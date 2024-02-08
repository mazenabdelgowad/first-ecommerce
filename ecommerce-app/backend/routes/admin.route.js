const express = require("express");
const { verifiyToken } = require("../middlewares/verifiyToken");
const allowedTo = require("../middlewares/allowedTo");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const userRoles = require("../utils/roles");

router.route("/login").post(adminController.login);

module.exports = router;
