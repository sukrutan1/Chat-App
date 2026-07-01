import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
const listen = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`app listen on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error Database Connection.");
  }
};

listen();
