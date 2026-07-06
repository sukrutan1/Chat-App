import { io } from "socket.io-client";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

let socket = null;

/**
 * Socket bağlantısını başlatır (login/checkAuth sonrasında çağrılır)
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
 * Mevcut socket instance'ını döndürür
 */
export const getSocket = () => socket;

/**
 * Socket bağlantısını keser (logout sonrasında çağrılır)
 */
export const disconnectSocket = () => {
  if (socket?.connected) {
    socket.disconnect();
  }
  socket = null;
};
