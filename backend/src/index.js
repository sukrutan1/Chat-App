import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

// app ve server artık socket.js'den geliyor (socket.io HTTP server)
import { app, server } from "./lib/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const listen = async () => {
  try {
    await connectDB();
    // Socket.IO için app.listen() değil, server.listen() kullanılıyor
    server.listen(PORT, () => {
      console.log(`app listen on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error Database Connection.");
  }
};

listen();
