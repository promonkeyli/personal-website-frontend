"use client";

import useFullScreenStore from "@/stores/system/fullScreen";
import { getCDNImage } from "@/utils/cdn";
import { useRouter } from "next/navigation";

export default function IMenu() {
  const { isFullScreen, exitFullScreen, enterFullScreen } =
    useFullScreenStore();
  const router = useRouter();
  const handleExit = () => {
    router.push("/login");
  };

  return (
    <div className="h-[32px] bg-white bg-opacity-35 flex justify-between items-center pr-5 pl-2">
      <div className="dropdown rounded-md flex justify-between items-center">
        <div tabIndex={0} className="avatar">
          <div className="w-6 rounded-full">
            <img src={getCDNImage("avatar.png")} alt="avatar.png" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-md bg-base-100 z-[1] w-36 p-1 shadow top-8"
        >
          <li onClick={handleExit}>
            <a>退出</a>
          </li>
        </ul>
      </div>
      <div>
        {isFullScreen ? (
          <img
            src={getCDNImage("fullscreen_exit.svg")}
            className="w-[22px] h-[22px] cursor-pointer"
            alt=""
            onClick={exitFullScreen}
          />
        ) : (
          <img
            src={getCDNImage("fullscreen.svg")}
            className="w-[22px] h-[22px] cursor-pointer"
            alt=""
            onClick={enterFullScreen}
          />
        )}
      </div>
    </div>
  );
}
