"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function ModeToggle() {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState(true);

  useEffect(() => {
    mode ? setTheme("dark") : setTheme("light");
  }, [mode]);

  return (
    <Button
      className="absolute top-8 right-8 text-primary bg-card
      hover:box-border hover:border hover:border-solid hover:border-2 hover:border-primary"
      variant="secondary"
      size="icon"
      onClick={() => setMode(!mode)}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
