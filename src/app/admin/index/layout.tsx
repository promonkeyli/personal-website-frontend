"use client";
import AdminAside from "./aside";

export default function AdminLayout({ children }: any) {
  return (
    <div className="w-screen h-screen p-2">
      <div className="h-full rounded-2xl border border-slate-300 grid grid-cols-[200px_1fr] text-[#555] tracking-widest shadow-2xl shadow-zinc-950">
        <aside className="bg-white rounded-ss-2xl rounded-es-2xl">
          <AdminAside />
        </aside>
        <main className="bg-gray-50 rounded-ee-2xl rounded-se-2xl">
          {children}
        </main>
      </div>
    </div>
  );
}
