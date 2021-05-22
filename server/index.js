import express from "express";
import dotenv from "dotenv";
import products from "./products.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("API");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);