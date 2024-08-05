"use client";
import IDock from "@/components/dock";
import IMenu from "@/components/menu";
import useUserStore from "@/stores/auth/user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!useUserStore.getState().token) {
      router.replace("/login");
    }
  }, []);
  return (
    <div className="mac-bg">
      <IMenu />
      <IDock />
    </div>
  );
}
