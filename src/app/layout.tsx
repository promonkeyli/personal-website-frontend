import type { Metadata } from "next";
import "@/styles/globals.css";
import type React from "react";

export const metadata: Metadata = {
  title: "Young`s Website",
  description: "个人前端知识分享网站",
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
