const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: "1y",
  });
  return token;
};
