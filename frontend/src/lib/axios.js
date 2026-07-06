import axios from "axios";

export const axiosInstance = axios.create({
  // Development: http://localhost:5001/api
  // Production:  /api  (aynı sunucu, göreceli yol)
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "/api",
  withCredentials: true,
});
