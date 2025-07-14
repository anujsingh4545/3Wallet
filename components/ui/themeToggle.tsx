"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Switch } from "./switch";


const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className=" flex items-center gap-2 ">
      <Sun className={` w-6 h-6 ${isDarkMode ? "text-primary/50" : "text-primary"} `} />
      <Switch checked={isDarkMode} onCheckedChange={(checked)=> setTheme(checked ? "dark": "light")} />
      <Moon className={` w-6 h-6 ${isDarkMode ? "text-primary" : "text-primary/50"} `} />
    </div>
  );
};

export default ModeToggle;
