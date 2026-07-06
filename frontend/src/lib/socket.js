import { io } from "socket.io-client";

// Development: separate backend server
// Production:  same server (Express + Socket.IO)
const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5001"
  : "/";

let socket = null;

/**
 * Initializes the socket connection (called after login/checkAuth)
 */
export const initSocket = (userId) => {
  if (socket?.connected) return socket;

  socket = io(BASE_URL, {
    query: { userId },
    withCredentials: true,
  });

  socket.connect();
  return socket;
};

/**
 * Returns the current socket instance
 */
export const getSocket = () => socket;

/**
 * Disconnects the socket (called on logout)
 */
export const disconnectSocket = () => {
  if (socket?.connected) {
    socket.disconnect();
  }
  socket = null;
};
