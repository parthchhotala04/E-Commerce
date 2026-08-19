import dotenv from "dotenv";
dotenv.config();

import e from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import User from "./model/User.js";
import jwt from "jsonwebtoken";
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import authRoutes from "./routes/authRoutes.js"

const app = e();

app.use(cors());
app.use(e.urlencoded({ extended: true }));
app.use(e.json());


mongoose.connect('mongodb://localhost:27017/4-30')
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.get("/", (req, resp) => {
    resp.send("Hello World");
});

app.use("/api/auth", authRoutes)
app.use("/uploads", e.static("uploads"));
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(3000);