import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connect.js";
import taskRoutes from "./routes/routes.js";
import cors from "cors"
import mongoose from "mongoose";

dotenv.config();

await connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use('/notes-app/crud', taskRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(
  app.listen(5000, () => {
    console.log("hello");
  })
).catch(err => {
  console.error(err);
})
