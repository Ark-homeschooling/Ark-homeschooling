import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "254759897106"; // Teacher Farida
const DEFAULT_MESSAGE =
  "Hi Teacher Farida! I'd like to know more about Ark Homeschooling.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-[0_8px_20px_-4px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 animate-bob"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
