import React from "react";
import "./index.css";

export interface IWindowProps {
  isOpen?: boolean;
}
export default function IWindow(props: IWindowProps) {
  return (
    <div className="w-[80vw] h-[80vh] bg-white mx-auto my-[20px] rounded-xl flex flex-col">
      <div className="i-window-opt-container flex gap-2 p-2">
        <span className="i-window-opt-icon bg-[#ed6b60]">
          <span>-</span>
        </span>
        <span className="i-window-opt-icon bg-[#f4be4f]">
          <span>+</span>
        </span>
        <span className="i-window-opt-icon bg-[#60c353]">
          <span>x</span>
        </span>
      </div>
      <div className="flex-1 p-4 pt-2 grid place-content-center">
        <span className="text-2xl text-[#b96ca0] font-semibold">
          Mac OS Desktop Window Component
        </span>
      </div>
    </div>
  );
}
