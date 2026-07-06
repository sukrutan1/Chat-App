import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import MessageInput from "./MessageInput";
import { X } from "lucide-react";
import { formatMessageTime } from "../lib/utils";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
              />
            </div>
          </div>
          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {isOnline ? "Çevrimiçi" : "Çevrimdışı"}
            </p>
          </div>
        </div>
        <button onClick={() => setSelectedUser(null)} className="btn btn-ghost btn-sm btn-circle">
          <X />
        </button>
      </div>
    </div>
  );
};

const MessageSkeleton = () => (
  <div className="flex flex-col gap-3 p-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className={`flex items-center gap-3 ${i % 2 === 0 ? "" : "flex-row-reverse"}`}>
        <div className="skeleton size-10 rounded-full shrink-0" />
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40" />
          <div className="skeleton h-4 w-28" />
        </div>
      </div>
    ))}
  </div>
);

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser?._id, getMessages]);

  // Real-time mesaj aboneliği
  useEffect(() => {
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [subscribeToMessages, unsubscribeFromMessages, selectedUser]);

  useEffect(() => {
    if (messageEndRef.current && messages.length > 0) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      {isMessagesLoading ? (
        <MessageSkeleton />
      ) : (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-base-content/50 py-10 text-sm">
              Henüz mesaj yok. İlk mesajı gönderin!
            </div>
          )}
          {messages.map((message) => {
            const isMine = message.senderId === authUser._id;
            return (
              <div
                key={message._id}
                className={`chat ${isMine ? "chat-end" : "chat-start"}`}
              >
                <div className="chat-image avatar">
                  <div className="size-10 rounded-full border">
                    <img
                      src={
                        isMine
                          ? authUser.profilePic || "/avatar.png"
                          : selectedUser.profilePic || "/avatar.png"
                      }
                      alt="Profil"
                    />
                  </div>
                </div>
                <div className="chat-header mb-1">
                  <time className="text-xs opacity-50 ml-1">
                    {formatMessageTime(message.createdAt)}
                  </time>
                </div>
                <div className="chat-bubble flex flex-col">
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Mesaj resmi"
                      className="sm:max-w-[200px] rounded-md mb-2"
                    />
                  )}
                  {message.text && <p>{message.text}</p>}
                </div>
              </div>
            );
          })}
          <div ref={messageEndRef} />
        </div>
      )}

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
