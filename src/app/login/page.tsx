"use client";
import { postLogin } from "@/api/sdk.gen";
import type { ModelsUser } from "@/api/types.gen";
import Footer from "@/components/footer";
import IToast from "@/components/toast";
import { SYSTEM_ROLE } from "@/constants";
import { getCDNImage } from "@/utils/cdn";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const { role, pwd, handlePwdChange, handleRoleChange, handleSubmit } =
    useLogin();

  return (
    <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-screen h-screen grid place-content-center">
      <div className="card glass w-96 p-10 flex flex-col items-center gap-5">
        <div className="avatar">
          <div className="w-20 rounded-full transition-transform duration-1000 hover:rotate-[360deg] mx-auto">
            <img src={getCDNImage("avatar.png")} alt="avatar.png" />
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
            type="password"
            className="input w-full"
            placeholder="password"
            value={pwd}
            onChange={handlePwdChange}
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
  // @ts-ignore
  const [role, setRole] = useState<string>(SYSTEM_ROLE.NORMAL);
  // @ts-ignore
  const [pwd, setPwd] = useState<string>("");

  const handleRoleChange = (e: any) => {
    setRole(e.target.value);
  };
  const handlePwdChange = (e: any) => {
    setPwd(e.target.value);
  };
  const handleSubmit = async () => {
    const user: ModelsUser = {
      username: role,
      password: pwd,
    };
    const res = await postLogin({ body: user });
    console.log("res====", res);
    if (res.response.status !== 200) {
      return;
    }
    if (role === SYSTEM_ROLE.ADMIN) {
      router.push("/admin/index");
    } else {
      router.push("/");
    }
  };
  return {
    role,
    pwd,
    handleRoleChange,
    handlePwdChange,
    handleSubmit,
  };
}
