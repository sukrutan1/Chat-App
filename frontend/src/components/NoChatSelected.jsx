import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* İkon */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce">
              <MessageSquare className="size-8 text-primary" />
            </div>
          </div>
        </div>

        {/* Yazı */}
        <h2 className="text-2xl font-bold">Hoş geldiniz!</h2>
        <p className="text-base-content/60">
          Soldan bir kişi seçerek sohbete başlayın.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
