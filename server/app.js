import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connect.js";
import router from "./routes/routes.js";
import cors from "cors"

dotenv.config();

await connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(router)

app.listen(5000, () => {
  console.log("hello");
});
