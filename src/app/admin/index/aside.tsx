"use client";
import { useRouter } from "next/navigation";

interface MenuItem {
  name: string;
  url: string;
}
const menuList: Array<MenuItem> = [
  {
    name: "tools manage",
    url: "/admin/tools",
  },
  {
    name: "other manage",
    url: "/admin/other",
  },
];

export default function AdminAside() {
  return (
    <div className="w-full h-full p-5 grid grid-rows-[100px_1fr_100px]">
      <div className=""></div>
      <div>
        {menuList.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      <div className=""></div>
    </div>
  );
}

function MenuItem(props: MenuItem) {
  const router = useRouter();
  const { name, url } = props;
  return (
    <div
      className="py-2 flex items-center cursor-pointer hover:border hover:border-transparent"
      onClick={() => {
        router.push(url);
      }}
    >
      <span className="w-[20px]"></span>
      <span>{name}</span>
    </div>
  );
}
