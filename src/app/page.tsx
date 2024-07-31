"use client";
import IDock from "@/components/dock";
import IMenu from "@/components/menu";

export default function Home() {
  return (
    <div className="container-bg">
      <IMenu />
      <IDock />
    </div>
  );
}
