import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import { notFound, errorHandler } from "./src/middleware/errorMiddleware.js";
import userRoutes from "./src/routes/userRoutes";
import productRoutes from "./src/routes/productRoutes";
import cors from "cors";

dotenv.config();
connectDB(); 

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);
app.get("/api/test", (req, res) => res.send("API service is working.")); // Test API

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
