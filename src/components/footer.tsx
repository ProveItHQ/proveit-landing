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
import { useTheme } from "next-themes";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { theme } = useTheme();

  return (
    <footer
      id="footer"
      className="pt-20 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0">
          {/* Company Info - 35% */}
          <div className="md:w-[35%] space-y-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src={
                    theme === "dark"
                      ? "/updated_logo_light.svg"
                      : "/updated_logo.svg"
                  }
                  alt="ProveIt Logo"
                  width={40}
                  height={25}
                  className="mr-3 h-15 w-25 object-cover cursor-pointer"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Revolutionizing how companies hire and candidates demonstrate
                their abilities through project-based technical assessments.
              </p>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400">
                  8888 University Drive, Burnaby, BC V5A 1S6, Canada
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400">
                  info@proveit.me
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="https://www.linkedin.com/company/proveit-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              </a>
              <a
                href="https://github.com/proveit-org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/proveitai/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-red-500 dark:text-red-400" />
              </a>
            </motion.div>
          </div>

          {/* Quick Links - 35% */}
          <div className="md:w-[35%] space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-gray-100">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("audience-benefits")}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection("support")}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Support
                </button>
              </div>
            </motion.div>
          </div>

          {/* Newsletter - 30% */}
          <div className="md:w-[30%] space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                Stay Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Subscribe to our newsletter to get updates on our latest
                features and releases.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                By subscribing, you agree to our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="mt-16 pt-8 pb-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} ProveIt. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
