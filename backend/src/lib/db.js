import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connection Successfully");
  } catch (error) {
    console.log("MONGODB Connection Error:", error);
  }
};
