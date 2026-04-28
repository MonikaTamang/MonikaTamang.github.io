"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition duration-150"
      style={{
        background: `radial-gradient(
          500px at ${pos.x}px ${pos.y}px,
          rgba(59,130,246,0.5),
          rgba(99,102,241,0.15),
          transparent 70%
        )`,
        filter: "blur(20px)",
        transition: "transform 0.1s ease-out",
      }}
    />
  );
}