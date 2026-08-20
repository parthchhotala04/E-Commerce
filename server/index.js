import dotenv from "dotenv";
dotenv.config();

import e from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import authRoutes from "./routes/authRoutes.js"

const app = e();

app.use(cors());
app.use(e.urlencoded({ extended: true }));
app.use(e.json());


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, resp) => {
    resp.send("Hello World");
});

app.use("/api/auth", authRoutes)
app.use("/uploads", e.static("uploads"));
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(3000);