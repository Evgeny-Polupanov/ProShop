import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res, next) => {
    res.send("API is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () =>
    console.log(
        `Server running in the ${NODE_ENV} mode on port ${PORT}`.yellow.bold,
    ),
);
