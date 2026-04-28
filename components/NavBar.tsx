"use client";

import { useEffect, useState } from "react";

const sections = ["about", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.getBoundingClientRect().top;

        if (top < 200 && top > -200) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">

        <h1 className="font-semibold">Monika</h1>

        <div className="flex gap-6 text-sm">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`capitalize transition ${
                active === s ? "text-blue-400" : "text-gray-300"
              }`}
            >
              {s}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}