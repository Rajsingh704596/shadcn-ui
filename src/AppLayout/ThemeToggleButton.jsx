import React from "react";

import { ThemeProvider } from "@/components/theme-provider";

import { ModeToggle } from "@/components/mode-toggle";

const ThemeToggleButton = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>
    </div>
  );
};

export default ThemeToggleButton;
