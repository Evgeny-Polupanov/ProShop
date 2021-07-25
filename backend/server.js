import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get("/", (req, res, next) => {
  res.send("API is running");
});

app.get("/api/products", (req, res, next) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res, next) => {
  const product = products.find(({ _id }) => _id === req.params.id);
  res.json(product);
});

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () => console.log(`Server running in the ${NODE_ENV} mode on port ${PORT}`));
