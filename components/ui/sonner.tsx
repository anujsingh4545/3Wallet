"use client"

import { useTheme } from "next-themes";
import React from "react";
import { Toaster as Sonner } from "sonner";

type ToastProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToastProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToastProps["theme"]}
      className="toaster group"
      toastOptions={{}}
      {...props}
    />
  );
};

export { Toaster };
