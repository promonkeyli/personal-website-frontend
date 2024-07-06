import type { Metadata } from "next";
import "@/styles/globals.css";
import type React from "react";

export const metadata: Metadata = {
  title: "我的技术笔记",
  description: "开发工具&技术分享",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
