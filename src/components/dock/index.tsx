"use client";

export default function Dock() {
  const images = [
    { name: "Photos", src: "/images/launchpad.png" },
    { name: "Finder", src: "/images/finder.png" },
    { name: "Safari", src: "/images/safari.png" },
    { name: "Mail", src: "/images/notes.png" },
    { name: "Photos", src: "/images/siri.png" },
    { name: "Photos", src: "/images/apple_music.png" },
    { name: "Photos", src: "/images/messages.png" },
    { name: "Photos", src: "/images/reminders.png" },
    { name: "Photos", src: "/images/system_settings.png" },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-end bg-white bg-opacity-30 rounded-xl p-2 shadow-lg">
      {images.map((icon, index) => (
        <div
          key={index}
          className="flex flex-col items-center mx-1 transition-transform duration-300"
        >
          <img
            src={icon.src}
            alt={icon.name}
            className="w-12 h-12 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}
