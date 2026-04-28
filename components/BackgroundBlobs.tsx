"use client";

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse" />
      <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
    </div>
  );
}