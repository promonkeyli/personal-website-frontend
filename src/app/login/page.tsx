"use client";
import Footer from "@/components/footer";
import { SYSTEM_ROLE } from "@/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const { role, pwd, handlePwdChange, handleRoleChange, handleSubmit } =
    useLogin();

  return (
    <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-screen h-screen grid place-content-center">
      <div className="card glass w-96 p-5 flex flex-col items-center gap-5">
        <div className="avatar">
          <div className="w-24 rounded-full transition-transform duration-1000 hover:rotate-[360deg] mx-auto">
            <img src="images/avatar.png" alt="avatar.png" />
          </div>
        </div>
        <select
          className="select select-bordered w-full"
          onChange={handleRoleChange}
          value={role}
        >
          <option value={SYSTEM_ROLE.ADMIN}>{SYSTEM_ROLE.ADMIN}</option>
          <option value={SYSTEM_ROLE.NORMAL}>{SYSTEM_ROLE.NORMAL}</option>
        </select>
        {role === SYSTEM_ROLE.ADMIN && (
          <input
            type="text"
            className="input w-full"
            placeholder="password"
            value={pwd}
            onBlur={handlePwdChange}
          />
        )}
        <button type="button" className="btn w-full" onClick={handleSubmit}>
          login
        </button>
      </div>
      <Footer />
    </div>
  );
}

function useLogin() {
  const router = useRouter();
  const [role, setRole] = useState<string>(SYSTEM_ROLE.NORMAL);
  const [pwd, setPwd] = useState<string>("");

  const handleRoleChange = (e: any) => {
    setRole(e.target.value);
  };
  const handlePwdChange = (e: any) => {
    setPwd(e.target.value);
  };
  const handleSubmit = () => {
    console.log("🚀 ~ handleSubmit ~ role, pwd:", role, pwd);
    router.push("/");
  };
  return {
    role,
    pwd,
    handleRoleChange,
    handlePwdChange,
    handleSubmit,
  };
}
