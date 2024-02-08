const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URL;
const httpStatusText = require("./utils/httpStatusText");
const productsRouter = require("./routes/products.route");
const usersRouter = require("./routes/users.route");
const path = require("path");
const cors = require("cors");
const app = express();

// To handle the Cross Origin Resource Sharing
app.use(cors());

app.use(express.json());

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB Server Started");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Products router handler
app.use("/api/products", productsRouter);

// Users router handler
app.use("/api/users", usersRouter);

// NOT FOUND PAGES, NOT FOUND ROUTES
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: httpStatusText.ERROR,
    message: "This resource is not available",
    code: 404,
  });
});

// Errors comes from asyncWrapper error handler middleware
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatusText.ERROR,
    message: error.message,
    data: null,
    code: error.statusCode || 500,
  });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
