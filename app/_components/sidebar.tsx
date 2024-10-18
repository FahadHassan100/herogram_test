"use client";
import {
  CircleUserIcon,
  FileVideo,
  PanelsTopLeft,
  ShieldPlus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarHeader from "./sidebarHeader";

const Sidebar = async () => {
  const MenuOptions = [
    {
      id: 1,
      name: "Dashboard",
      path: "/",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "Create New",
      path: "/uploadVideo",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Account",
      path: "/dashboard",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Dashboard",
      path: "/dashboard",
      icon: CircleUserIcon,
    },
  ];

  const path = usePathname();
  console.log(path);

  return (
    <div>
      <aside className="sidebar w-64 hidden md:block bg-white p-4 md:shadow-md h-screen">
        <SidebarHeader />
        <div className="grid gap-3">
          {MenuOptions.map((items) => (
            <Link href={items.path} key={items.id}>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white rounded-md cursor-pointer ${
                  path === items.path &&
                  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                }`}
              >
                <items.icon />
                <h3>{items.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
