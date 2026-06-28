"use client";

import { FaWhatsapp, FaFilePdf } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* WhatsApp Hire Me */}
      <a
        href="https://wa.me/971541717654?text=Hi%20Monika%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20hire%20you"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp size={24} />
      </a>
  {/* Floating CV */}
      <a
        href="/Monika_Tamang_CV.pdf"
        target="_blank"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        title="View CV"
      >
        <FaFilePdf size={24} />
      </a>
    </div>
  );
}