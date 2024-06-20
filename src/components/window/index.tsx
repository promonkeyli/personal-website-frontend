import React from "react";

export interface IWindowProps {
  isOpen?: boolean;
}
export default function IWindow(props: IWindowProps) {
  return (
    <div className="macos-window">
      <div className="macos-title-bar">
        <div className="macos-buttons">
          <div className="macos-button red"></div>
          <div className="macos-button yellow"></div>
          <div className="macos-button green"></div>
        </div>
        <div className="text-lg font-medium text-gray-900">
          macOS Style Window
        </div>
        <div></div>
      </div>
      <div className="macos-content">
        <p>This is a macOS style window built with Tailwind CSS.</p>
      </div>
    </div>
  );
}
