"use client";
import Footer from "@/components/footer";
import { SYSTEM_ROLE } from "@/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [role, setRole] = useState<string>(SYSTEM_ROLE.NORMAL);

  const handleSelectChange = (e: any) => {
    setRole(e.target.value);
  };
  const handleBtnClick = () => {
    router.push("/");
  };

  return (
    <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-screen h-screen grid place-content-center">
      <div className="card card-compact bg-base-100 w-96 shadow-xl flex items-center gap-8 p-10">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="images/avatar.png" alt="avatar.png" />
          </div>
        </div>
        <select
          className="select select-bordered w-full"
          onChange={handleSelectChange}
          value={role}
        >
          <option value={SYSTEM_ROLE.ADMIN}>{SYSTEM_ROLE.ADMIN}</option>
          <option value={SYSTEM_ROLE.NORMAL}>{SYSTEM_ROLE.NORMAL}</option>
        </select>
        {role === SYSTEM_ROLE.ADMIN && (
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="password"
          />
        )}
        <button className="btn w-full" type="button" onClick={handleBtnClick}>
          login
        </button>
      </div>
      <Footer />
    </div>
  );
}
