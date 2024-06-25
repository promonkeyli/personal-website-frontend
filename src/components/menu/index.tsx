"use client";

import useFullScreenStore from "@/stores/system/fullScreen";

export default function IMenu() {
  const { isFullScreen, exitFullScreen, enterFullScreen } =
    useFullScreenStore();

  return (
    <div className="h-[30px] bg-white bg-opacity-30 flex justify-between items-center px-5">
      <div></div>
      <div>
        {isFullScreen ? (
          <img
            src="/images/fullscreen_exit.svg"
            className="w-[20px] h-[20px] cursor-pointer"
            alt=""
            onClick={exitFullScreen}
          />
        ) : (
          <img
            src="/images/fullscreen.svg"
            className="w-[20px] h-[20px] cursor-pointer"
            alt=""
            onClick={enterFullScreen}
          />
        )}
      </div>
    </div>
  );
}
