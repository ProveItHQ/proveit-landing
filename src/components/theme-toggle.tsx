"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative w-9 h-9 rounded-full"
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative w-9 h-9 rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* Show the appropriate icon based on current theme */}
      {theme === "light" ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-blue-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
