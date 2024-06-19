"use client";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Window from "@/components/window";

export default function Dock() {
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
    console.log(icon);
  };

  return (
    <>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-end bg-white bg-opacity-30 rounded-xl p-2 shadow-lg min-w-[400px]">
        {images.map((icon, index) => (
          <Tooltip key={index} delayDuration={0}>
            <TooltipTrigger>
              <img
                src={icon.src}
                alt={icon.name}
                className="w-12 h-12"
                onClick={() => handleClick(icon)}
              />
            </TooltipTrigger>
            <TooltipContent
              sideOffset={15}
              className="bg-white bg-opacity-30 border-0"
            >
              {icon.name}
              <TooltipArrow fill="white" fillOpacity={0.3} />
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <Window />
    </>
  );
}
