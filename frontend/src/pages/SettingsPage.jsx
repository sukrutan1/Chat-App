import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const THEMES = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
  "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
  "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
  "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
  "night", "coffee", "winter", "dim", "nord", "sunset",
];

const PREVIEW_MESSAGES = [
  { id: 1, content: "Merhaba! Nasılsın?", isSent: false },
  { id: 2, content: "İyiyim, teşekkürler! Ya sen?", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Tema</h2>
          <p className="text-sm text-base-content/70">
            Arayüz için bir tema seçin
          </p>
        </div>

        {/* Tema Izgarası */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
                theme === t ? "bg-base-200" : "hover:bg-base-200/50"
              }`}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary" />
                  <div className="rounded bg-secondary" />
                  <div className="rounded bg-accent" />
                  <div className="rounded bg-neutral" />
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
              {theme === t && (
                <span className="text-[10px] text-primary font-bold">✓</span>
              )}
            </button>
          ))}
        </div>

        {/* Önizleme */}
        <h3 className="text-base font-semibold mb-3">Önizleme</h3>
        <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
          {/* Önizleme – Sahte Navbar */}
          <div className="bg-base-200 px-4 py-3 border-b border-base-300">
            <div className="max-w-lg mx-auto flex items-center gap-2">
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium text-sm">
                A
              </div>
              <div>
                <p className="text-sm font-medium">Ahmet Yılmaz</p>
                <p className="text-xs text-base-content/70">Çevrimiçi</p>
              </div>
            </div>
          </div>

          {/* Önizleme – Mesajlar */}
          <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
            {PREVIEW_MESSAGES.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isSent ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl p-3 shadow-sm text-sm ${
                    msg.isSent
                      ? "bg-primary text-primary-content"
                      : "bg-base-200"
                  }`}
                >
                  <p>{msg.content}</p>
                  <p
                    className={`text-[10px] mt-1.5 ${
                      msg.isSent ? "text-primary-content/70" : "text-base-content/50"
                    }`}
                  >
                    12:00
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Önizleme – Giriş Alanı */}
          <div className="p-4 bg-base-200 border-t border-base-300">
            <div className="max-w-lg mx-auto flex gap-2">
              <input
                type="text"
                className="input input-bordered flex-1 text-sm h-10"
                placeholder="Mesaj yaz..."
                readOnly
              />
              <button className="btn btn-primary h-10 min-h-0">
                <Send className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
