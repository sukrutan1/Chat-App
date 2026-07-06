/**
 * Verilen ISO tarih string'ini "HH:MM" formatında döndürür.
 * Örn: "2024-05-10T14:32:00.000Z" → "14:32"
 */
export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
