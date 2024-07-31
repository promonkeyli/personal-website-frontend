"use client";
import Footer from "@/components/footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SYSTEM_ROLE } from "@/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [role, setRole] = useState<string>(SYSTEM_ROLE.NORMAL);

  const handleSelectChange = (e: any) => {
    setRole(e);
  };
  const handleBtnClick = () => {
    router.push("/");
  };

  return (
    <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-screen h-screen grid place-content-center">
      <Card className="w-96 glass rounded-xl">
        <CardContent className="flex flex-col items-center p-10 gap-5">
          <Avatar className="w-20 h-20 transition-transform duration-1000 hover:rotate-[360deg]">
            <AvatarImage src="images/avatar.png" alt="avatar.png" />
          </Avatar>
          <Select value={role} onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="请选择" />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectItem value={SYSTEM_ROLE.ADMIN}>
                {SYSTEM_ROLE.ADMIN}
              </SelectItem>
              <SelectItem value={SYSTEM_ROLE.NORMAL}>
                {SYSTEM_ROLE.NORMAL}
              </SelectItem>
            </SelectContent>
          </Select>
          {role === SYSTEM_ROLE.ADMIN && (
            <Input className="w-full" placeholder="password" />
          )}
          <Button variant="outline" className="w-full" onClick={handleBtnClick}>
            login
          </Button>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}
