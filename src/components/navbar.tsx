"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { name: "Why Us", sectionId: "support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex p-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center justify-center"
            >
              <Image
                src="/updated_logo.svg"
                alt="ProveIt Logo"
                className="h-40 w-25"
                width={100}
                height={100}
              />
            </button>
          </div>
          {/* <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                Prove<span className="gradient-text">It</span>
              </span>
            </Link>
          </div> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.sectionId)}
                className="block text-gray-700 hover:text-primary font-medium py-2 w-full text-left"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
