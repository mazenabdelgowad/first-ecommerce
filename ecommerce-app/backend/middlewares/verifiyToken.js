const jwt = require("jsonwebtoken");
const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");

const verifiyToken = (req, res, next) => {
  const authHeaders =
    req.headers["authorization"] || req.headers["Authorization"];

  if (!authHeaders) {
    const error = appError.create(
      "unauthorized access",
      401,
      httpStatusText.ERROR
    );
    return next(error);
  }
  // Get token from header if it exists
  const token = authHeaders.split(" ")[1];
  try {
    const currentUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.currentUser = currentUser;
    next();
  } catch (err) {
    const error = appError.create("invalid token", 400, httpStatusText.FAIL);
    return next(error);
  }
};

module.exports = {
  verifiyToken,
};
