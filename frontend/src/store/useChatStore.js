import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
import { getSocket } from "../lib/socket.js";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/message/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Kullanıcılar yüklenemedi.");
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/message/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Mesajlar yüklenemedi.");
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      const res = await axiosInstance.post(`/message/${selectedUser._id}`, messageData);
      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(error.response?.data?.message || "Mesaj gönderilemedi.");
    }
  },

  /**
   * Aktif sohbet için socket'ten gelen yeni mesajları dinler.
   * ChatContainer mount olurken çağrılır.
   */
  subscribeToMessages: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    const socket = getSocket();
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {
      // Yalnızca aktif sohbetten gelen mesajları ekle
      const isFromSelectedUser =
        newMessage.senderId === selectedUser._id ||
        newMessage.receiverId === selectedUser._id;

      if (!isFromSelectedUser) return;

      set({ messages: [...get().messages, newMessage] });
    });
  },

  /**
   * Socket listener'ını temizler.
   * ChatContainer unmount olurken çağrılır.
   */
  unsubscribeFromMessages: () => {
    const socket = getSocket();
    if (socket) socket.off("newMessage");
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
