"use client";
import { useState } from "react";

export default function Dock() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = [
    { name: "Finder", src: "/images/finder.png" },
    { name: "Safari", src: "/images/safari.png" },
    { name: "Mail", src: "/images/notes.png" },
    { name: "Music", src: "/images/og.png" },
    { name: "Photos", src: "/images/siri.png" },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-end bg-white bg-opacity-80 rounded-xl p-3 shadow-lg">
      {images.map((icon, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className={`flex flex-col items-center mx-3 transition-transform duration-300 ${
            activeIndex === index ? "scale-150" : ""
          }`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <img
            src={icon.src}
            alt={icon.name}
            className="w-10 h-10 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}
