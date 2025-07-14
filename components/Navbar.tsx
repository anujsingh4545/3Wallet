import React from "react";
import { Box } from "lucide-react";
import ModeToggle from "./ui/themeToggle";

const Navbar = () => {
  return (
    <div className=" w-full flex items-center justify-between p-4 ">
      <section className=" flex items-center gap-2  ">
        <Box className="w-[35px] h-[35px]" />
        <div className="flex flex-col gap-4">
          <span className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
            3Wallet{" "}
            <span className="rounded-full text-base bg-primary/10 border border-primary/50 px-2">
              v1 &nbsp;. &nbsp;0
            </span>
          </span>
        </div>
      </section>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
