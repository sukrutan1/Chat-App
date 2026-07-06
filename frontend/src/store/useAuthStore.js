import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
import { initSocket, disconnectSocket } from "../lib/socket.js";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });

      // Oturum geçerliyse socket'i bağla
      const socket = initSocket(res.data._id);
      socket.on("getOnlineUsers", (userIds) => {
        set({ onlineUsers: userIds });
      });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Hesap başarıyla oluşturuldu!");

      const socket = initSocket(res.data._id);
      socket.on("getOnlineUsers", (userIds) => {
        set({ onlineUsers: userIds });
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Kayıt olurken hata oluştu.");
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Başarıyla giriş yapıldı!");

      const socket = initSocket(res.data._id);
      socket.on("getOnlineUsers", (userIds) => {
        set({ onlineUsers: userIds });
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Giriş yapılırken hata oluştu.");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null, onlineUsers: [] });
      disconnectSocket();
      toast.success("Başarıyla çıkış yapıldı.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Çıkış yapılırken hata oluştu.");
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profil güncellendi!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Profil güncellenirken hata oluştu.");
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
