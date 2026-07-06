import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

// app and server come from socket.js (socket.io HTTP server)
import { app, server } from "./lib/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const NODE_ENV = process.env.NODE_ENV || "development";

// __dirname is not available in ESM, so we derive it manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());

// CORS is only needed in development (production uses same-origin)
if (NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173", credentials: true }));
}

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Serve the built frontend static files
const frontendDist = path.join(__dirname, "../../frontend/dist");
app.use(express.static(frontendDist));

// Catch-all: redirect unknown routes to index.html for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"));
});

const listen = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT} [${NODE_ENV}]`);
    });
  } catch (error) {
    console.log("Error: Database connection failed.");
  }
};

listen();
