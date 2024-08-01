"use client";

import useFullScreenStore from "@/stores/system/fullScreen";
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
      <div className="flex items-center">
        {/* <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-[24px] h-[24px]">
              <AvatarImage src="images/avatar.png" alt="avatar.png" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-white bg-opacity-30 border-none"
            sideOffset={10}
            collisionPadding={5}
          >
            <DropdownMenuItem className="DropdownMenuItem">
              设置
            </DropdownMenuItem>
            <DropdownMenuItem
              className="DropdownMenuItem"
              onSelect={handleExit}
            >
              退出
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div>
        {isFullScreen ? (
          <img
            src="/images/fullscreen_exit.svg"
            className="w-[22px] h-[22px] cursor-pointer"
            alt=""
            onClick={exitFullScreen}
          />
        ) : (
          <img
            src="/images/fullscreen.svg"
            className="w-[22px] h-[22px] cursor-pointer"
            alt=""
            onClick={enterFullScreen}
          />
        )}
      </div>
    </div>
  );
}
