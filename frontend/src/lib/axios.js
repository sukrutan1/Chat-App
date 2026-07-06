import axios from "axios";

export const axiosInstance = axios.create({
  // Development: http://localhost:5001/api
  // Production:  /api  (same server, relative path)
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "/api",
  withCredentials: true,
});
