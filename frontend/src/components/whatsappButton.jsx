import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511945197405"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 border-2 border-white right-4 sm:right-6 z-50 bg-amber-500 hover:bg-amber-600 text-white p-2 sm:p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp size={24} className="sm:w-7 sm:h-7" />
    </a>
  );
}

export default WhatsAppButton;
