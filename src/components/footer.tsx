"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Github,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100"
    >
      {/* Top Wave SVG */}
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="fill-current text-white dark:text-gray-900"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16">
          {/* Company Info - 35% */}
          <div className="md:w-[35%] space-y-2">
            <div className="flex items-center">
              <Image
                src="/updated_logo.svg"
                alt="ProveIt Logo"
                width={50}
                height={25}
                className="h-10 w-25 object-cover"
                onClick={() => scrollToSection("hero")}
                style={{ cursor: "pointer" }}
              />
            </div>

            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Redefining technical interviews with project-based assessments
              that showcase real-world skills and abilities.
            </p>

            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <MapPin size={18} className="text-blue-600 flex-shrink-0" />
              <span>Burnaby, BC</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Mail size={18} className="text-blue-600 flex-shrink-0" />
              <span>info@proveit.me</span>
            </div>

            <div className="flex space-x-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-100 dark:bg-gray-800 p-2 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors"
              >
                <a href="https://www.instagram.com/proveit.ai/" target="_blank">
                  <Instagram size={20} />
                </a>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-100 dark:bg-gray-800 p-2 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors"
              >
                <a
                  href="https://www.linkedin.com/company/proveit-ai/"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-100 dark:bg-gray-800 p-2 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors"
              >
                <a href="https://github.com/proveit-ai" target="_blank">
                  <Github size={20} />
                </a>
              </motion.button>
            </div>
          </div>

          {/* Quick Links - 35% */}
          <div className="md:w-[35%]">
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white relative">
              <span className="relative z-10">Navigation</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <motion.li variants={fadeInUpItem}>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                  />
                  Home
                </button>
              </motion.li>
              <motion.li variants={fadeInUpItem}>
                <button
                  onClick={() => scrollToSection("problem-enriched")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                  />
                  Problem
                </button>
              </motion.li>
              <motion.li variants={fadeInUpItem}>
                <button
                  onClick={() => scrollToSection("problem-solution")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                  />
                  Our Approach
                </button>
              </motion.li>
              <motion.li variants={fadeInUpItem}>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                  />
                  Features
                </button>
              </motion.li>
              <motion.li variants={fadeInUpItem}>
                <button
                  onClick={() => scrollToSection("audience-benefits")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                  />
                  Benefits
                </button>
              </motion.li>
              <motion.li variants={fadeInUpItem}>
                <button
                  onClick={() => scrollToSection("support")}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                >
                  <ArrowRight
                    size={14}
                    className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                  />
                  Why Us
                </button>
              </motion.li>
            </ul>
          </div>

          {/* Newsletter - 30% */}
          <div className="md:w-[30%]">
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white relative">
              <span className="relative z-10">Stay Updated</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, features, and
              news about ProveIt.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-2 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} ProveIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
