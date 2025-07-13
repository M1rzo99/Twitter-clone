import { Feather } from "lucide-react";
import Link from "next/link";
import React from "react";

const SidebarPostButton = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center justify-center p-4 mt-6 transition rounded-full cursor-pointer lg:hidden h-14 w-14 bg-sky-500 hover:bg-opacity-80">
        <Feather size={24} color="white" />
      </div>

      <div className="hidden px-4 py-2 mt-6 rounded-full cursor-pointer lg:block bg-sky-500 hover:bg-opacity-90">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          POST
        </p>
      </div>
    </Link>
  );
};

export default SidebarPostButton;
