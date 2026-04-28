"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 120,
}: {
  text: string;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;

      if (i > text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="border-r-2 border-blue-400 pr-1 animate-pulse">
      {displayed}
    </span>
  );
}