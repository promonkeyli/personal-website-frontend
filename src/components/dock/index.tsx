"use client";
import ContentTools from "@/components/content/content-tools";
import IWindow, { type IWindowRef } from "@/components/window";
import { useRef, useState } from "react";

export default function IDock() {
  const IWindowRef = useRef<IWindowRef | null>(null);

  const images = [
    { name: "Photos", src: "/images/launchpad.png" },
    { name: "Finder", src: "/images/finder.png" },
    { name: "Safari", src: "/images/safari.png" },
    { name: "notes", src: "/images/notes.png" },
    { name: "siri", src: "/images/siri.png" },
    { name: "apple music", src: "/images/apple_music.png" },
    { name: "message", src: "/images/messages.png" },
    { name: "reminder", src: "/images/reminders.png" },
    { name: "settings", src: "/images/system_settings.png" },
  ];

  const handleClick = (icon: any) => {
    if (icon.name === "notes") {
      IWindowRef?.current?.open();
    }
  };

  return (
    <>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-end bg-white bg-opacity-30 rounded-xl p-2 shadow-lg min-w-[400px]">
        {images.map((icon, index) => (
          <span key={index} data-tip-content={icon.name} className="i-tool-tip">
            <img
              src={icon.src}
              alt={icon.name}
              className="w-12 h-12"
              onClick={() => handleClick(icon)}
            />
          </span>
        ))}
      </div>
      {/* tool window */}
      <IWindow ref={IWindowRef}>
        <ContentTools />
      </IWindow>
    </>
  );
}
