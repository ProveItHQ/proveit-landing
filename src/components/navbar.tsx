"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mount effect to handle client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Problem", sectionId: "problem-enriched" },
    { name: "Our Approach", sectionId: "problem-solution" },
    { name: "Features", sectionId: "features" },
    { name: "Benefits", sectionId: "audience-benefits" },
    { name: "About", sectionId: "about" },
    { name: "Why Us", sectionId: "support" },
    { name: "FAQ", sectionId: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Choose a consistent logo for server rendering to avoid hydration mismatch
  const logoSrc =
    mounted && (resolvedTheme === "dark" || theme === "dark")
      ? "/proveit-logo-dark.svg"
      : "/proveit-logo-light.svg";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors ${
        isScrolled ? "border-b border-gray-200 dark:border-gray-800" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={logoSrc}
              alt="ProveIt Logo"
              width={50}
              height={30}
              className="h-15 w-25 object-cover cursor-pointer"
              onClick={() => scrollToSection("hero")}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <motion.div
              className="flex items-center space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center space-x-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ThemeToggle />
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                onClick={() =>
                  window.open("https://tally.so/r/3yzaJW", "_self")
                }
              >
                Share Opinion
              </Button>
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                onClick={() =>
                  window.open(
                    "https://forms.fillout.com/t/mG6LQ4XQkJus",
                    "_self"
                  )
                }
              >
                Get Early Access
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 dark:text-gray-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-20 md:hidden z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Semi-transparent overlay */}
            <div
              className="absolute inset-0 bg-black/50 dark:bg-black/60"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu content */}
            <div className="relative bg-white dark:bg-gray-900 h-auto shadow-lg">
              <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => {
                      scrollToSection(link.sectionId);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-lg font-medium transition-colors text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.div
                  className="flex flex-col space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>
                  <Button
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 w-full"
                    onClick={() => {
                      window.open("https://tally.so/r/3yzaJW", "_self");
                      setIsMenuOpen(false);
                    }}
                  >
                    Share Opinion
                  </Button>
                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 w-full"
                    onClick={() => {
                      window.open(
                        "https://forms.fillout.com/t/mG6LQ4XQkJus",
                        "_self"
                      );
                      setIsMenuOpen(false);
                    }}
                  >
                    Get Early Access
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
