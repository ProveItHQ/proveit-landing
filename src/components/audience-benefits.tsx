"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import {
  Building,
  Users,
  UserCheck,
  Clock,
  TrendingUp,
  Zap,
  Target,
  Award,
  Briefcase,
  CheckCircle,
  BarChart,
  Shield,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import React from "react";

type BenefitItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type AudienceType = "recruiters" | "candidates" | "companies";

type BenefitItems = {
  [key in AudienceType]: BenefitItem[];
};

export default function AudienceBenefits() {
  const [activeTab, setActiveTab] = useState<AudienceType>("recruiters");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<AudienceType | null>(
    "recruiters"
  );
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { theme } = useTheme();

  const benefitItems: BenefitItems = {
    recruiters: [
      {
        icon: (
          <Clock
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Reduce Time-to-Hire",
        description:
          "Cut your hiring timeline by up to 50% with our streamlined assessment process.",
      },
      {
        icon: (
          <UserCheck
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Better Candidate Evaluation",
        description:
          "Assess real skills in action, not just theoretical knowledge from resumes.",
      },
      {
        icon: (
          <TrendingUp
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Improved Hiring Decisions",
        description:
          "Make data-driven decisions with comprehensive performance analytics.",
      },
      {
        icon: (
          <Zap
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Streamlined Workflow",
        description:
          "Manage your entire technical interview process in one unified platform.",
      },
    ],
    candidates: [
      {
        icon: (
          <Target
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Showcase Real Skills",
        description:
          "Demonstrate your abilities in realistic scenarios rather than abstract puzzles.",
      },
      {
        icon: (
          <Award
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Fair Assessment",
        description:
          "Be evaluated on your actual capabilities in a standardized environment.",
      },
      {
        icon: (
          <Briefcase
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Career Advancement",
        description:
          "Stand out from other applicants with comprehensive skill demonstrations.",
      },
      {
        icon: (
          <CheckCircle
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Reduced Interview Stress",
        description:
          "Perform in a familiar coding environment that mirrors real-world work.",
      },
    ],
    companies: [
      {
        icon: (
          <Building
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Build Stronger Teams",
        description:
          "Identify candidates who truly fit your technical and cultural requirements.",
      },
      {
        icon: (
          <BarChart
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Reduce Hiring Costs",
        description:
          "Lower recruitment expenses by streamlining the technical assessment process.",
      },
      {
        icon: (
          <Users
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Improve Retention",
        description:
          "Hire candidates who are genuinely suited for your roles and work environment.",
      },
      {
        icon: (
          <Shield
            className={`h-10 w-10 ${
              theme === "dark" ? "text-gray-900" : "text-black"
            }`}
          />
        ),
        title: "Standardized Evaluation",
        description:
          "Ensure consistent, bias-reduced assessment across all technical candidates.",
      },
    ],
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const tabVariants = {
    inactive: {
      opacity: 0.7,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
    active: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const iconContainerVariants = {
    initial: {
      backgroundColor: "rgb(249, 250, 251)",
      scale: 1,
      rotate: 0,
    },
    hover: {
      backgroundColor: "rgb(239, 246, 255)",
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };

  const arrowVariants = {
    initial: { opacity: 0, x: -10 },
    hover: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const accordionVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 },
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
  };

  const toggleAccordion = (section: AudienceType) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Function to render benefit cards
  const renderBenefitCards = (audience: AudienceType) => (
    <motion.div
      className="grid md:grid-cols-2 gap-8"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      layout
    >
      {benefitItems[audience].map((benefit: BenefitItem, index: number) => (
        <motion.div
          key={index}
          className="relative bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          variants={fadeIn}
          initial="initial"
          whileHover="hover"
          animate={hoveredCard === index ? "hover" : "initial"}
          onHoverStart={() => setHoveredCard(index)}
          onHoverEnd={() => setHoveredCard(null)}
          onTap={() => setHoveredCard(hoveredCard === index ? null : index)}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle gradient background that appears on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/50 opacity-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative z-10">
            <motion.div
              className="mb-6 inline-flex p-4 rounded-xl bg-blue-900 text-secondary"
              variants={iconContainerVariants}
            >
              {benefit.icon}
            </motion.div>

            <h3 className="text-2xl font-bold mb-4 flex items-center text-primary group-hover:text-blue-600">
              {benefit.title}
              <motion.span
                className="ml-2 inline-flex items-center text-primary"
                variants={arrowVariants}
              >
                <ArrowRight size={18} />
              </motion.span>
            </h3>

            <p className="text-foreground text-lg leading-relaxed">
              {benefit.description}
            </p>

            {/* Subtle line that extends on hover */}
            <motion.div
              className="h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mt-6"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Mobile accordion section
  const renderMobileAccordion = () => (
    <div className="space-y-6">
      {(Object.keys(benefitItems) as AudienceType[]).map((audience) => (
        <div
          key={audience}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
        >
          <motion.button
            className="w-full p-6 flex justify-between items-center bg-gray-50 hover:bg-blue-50 transition-colors"
            onClick={() => toggleAccordion(audience)}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-bold text-left flex items-center text-gray-900 group-hover:text-blue-600">
              {audience === "recruiters" && "For Recruiters"}
              {audience === "candidates" && "For Candidates"}
              {audience === "companies" && "For Companies"}
            </h3>
            <motion.div
              animate={{ rotate: expandedSection === audience ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </motion.div>
          </motion.button>

          <motion.div
            initial="collapsed"
            animate={expandedSection === audience ? "expanded" : "collapsed"}
            variants={accordionVariants}
            className="overflow-hidden"
          >
            <div className="p-6 pt-2">{renderBenefitCards(audience)}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );

  // Desktop tabs section
  const renderDesktopTabs = () => (
    <Tabs
      defaultValue="recruiters"
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as AudienceType)}
      className="w-full max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <TabsList className="grid w-full grid-cols-3 mb-16 h-16 p-1 bg-blue-50/80 backdrop-blur-sm rounded-full">
          {(Object.keys(benefitItems) as AudienceType[]).map((tab) => (
            <motion.div
              key={tab}
              animate={activeTab === tab ? "active" : "inactive"}
              variants={tabVariants}
              className="relative"
            >
              <TabsTrigger
                value={tab}
                className="text-lg py-4 w-full rounded-full relative z-10"
              >
                {tab === "recruiters" && "For Recruiters"}
                {tab === "candidates" && "For Candidates"}
                {tab === "companies" && "For Companies"}
              </TabsTrigger>
              {activeTab === tab && (
                <motion.div
                  className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full shadow-md"
                  layoutId="activeTab"
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </motion.div>
          ))}
        </TabsList>
      </motion.div>

      {(Object.keys(benefitItems) as AudienceType[]).map((tabKey) => (
        <TabsContent key={tabKey} value={tabKey}>
          {renderBenefitCards(tabKey)}
        </TabsContent>
      ))}
    </Tabs>
  );

  return (
    <section
      id="audience-benefits"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-50 to-white pb-24 pt-12 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-indigo-50 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-50 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Benefits for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform delivers unique advantages for recruiters, candidates,
            and companies alike.
          </p>
        </motion.div>

        {/* Conditionally render tabs or accordion based on screen size */}
        <div className="hidden md:block">{renderDesktopTabs()}</div>

        <div className="md:hidden">{renderMobileAccordion()}</div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-12 text-gray-800">
            Trusted by industry leaders to transform their hiring process
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-black mb-2">85%</span>
              <p className="text-black">Faster hiring process</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-black mb-2">93%</span>
              <p className="text-black">Candidate satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-black mb-2">76%</span>
              <p className="text-black">Reduced hiring costs</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-black mb-2">4.8/5</span>
              <p className="text-black">Customer rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
