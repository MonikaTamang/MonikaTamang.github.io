"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: 2 + Math.random() * 3, // different blink speed
      delay: Math.random() * 5,
    }));

    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute bg-white rounded-full star-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}