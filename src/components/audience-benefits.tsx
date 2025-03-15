"use client";

import { useState, useRef, useEffect } from "react";
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
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconColor =
    mounted && (resolvedTheme === "dark" || theme === "dark")
      ? "text-gray-300"
      : "text-gray-900";

  const benefitItems: BenefitItems = {
    recruiters: [
      {
        icon: <Clock className={`h-10 w-10 ${iconColor}`} />,
        title: "Accelerate Hiring Decisions",
        description:
          "Evaluate candidates through real-world projects instead of theoretical algorithm puzzles.",
      },
      {
        icon: <UserCheck className={`h-10 w-10 ${iconColor}`} />,
        title: "Comprehensive Skill Assessment",
        description:
          "Track code quality, system design decisions, and problem-solving approach in one assessment.",
      },
      {
        icon: <TrendingUp className={`h-10 w-10 ${iconColor}`} />,
        title: "Data-Driven Hiring Insights",
        description:
          "Receive detailed AI-generated reports on candidate performance and technical capabilities.",
      },
      {
        icon: <Zap className={`h-10 w-10 ${iconColor}`} />,
        title: "Customizable Assessment Framework",
        description:
          "Create role-specific project environments tailored to your company's tech stack and needs.",
      },
    ],
    candidates: [
      {
        icon: <Target className={`h-10 w-10 ${iconColor}`} />,
        title: "Demonstrate Practical Skills",
        description:
          "Show your abilities in a realistic sandbox environment rather than whiteboard algorithms.",
      },
      {
        icon: <Award className={`h-10 w-10 ${iconColor}`} />,
        title: "Receive Meaningful Feedback",
        description:
          "Get personalized reports highlighting your strengths and areas for improvement.",
      },
      {
        icon: <Briefcase className={`h-10 w-10 ${iconColor}`} />,
        title: "Access AI Assistance",
        description:
          "Utilize approved AI tools during your assessment, just like in a real work environment.",
      },
      {
        icon: <CheckCircle className={`h-10 w-10 ${iconColor}`} />,
        title: "Work in Familiar Environments",
        description:
          "Code in a full-featured sandbox with your preferred languages, frameworks, and tools.",
      },
    ],
    companies: [
      {
        icon: <Building className={`h-10 w-10 ${iconColor}`} />,
        title: "Identify True Technical Talent",
        description:
          "Find candidates who excel at building real features, not just memorizing algorithms.",
      },
      {
        icon: <BarChart className={`h-10 w-10 ${iconColor}`} />,
        title: "Optimize Recruitment ROI",
        description:
          "Reduce costly mis-hires by evaluating candidates' actual job-relevant capabilities.",
      },
      {
        icon: <Users className={`h-10 w-10 ${iconColor}`} />,
        title: "Enhance Team Compatibility",
        description:
          "Assess how candidates approach projects similar to your actual work environment.",
      },
      {
        icon: <Shield className={`h-10 w-10 ${iconColor}`} />,
        title: "Standardize Technical Evaluation",
        description:
          "Implement consistent, objective assessment criteria across all technical roles.",
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
      backgroundColor:
        mounted && resolvedTheme === "dark"
          ? "rgb(31, 41, 55)"
          : "rgb(243, 244, 246)",
      scale: 1,
      rotate: 0,
    },
    hover: {
      backgroundColor:
        mounted && resolvedTheme === "dark"
          ? "rgb(55, 65, 81)"
          : "rgb(239, 246, 255)",
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

  const underlineVariants = {
    initial: {
      width: "0%",
      opacity: 0,
    },
    hover: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
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
          className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
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
            className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/30 dark:from-blue-900/10 dark:to-blue-800/10 opacity-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative z-10">
            {/* Icon and heading in a flex container */}
            <div className="flex items-center mb-6">
              <motion.div
                className="inline-flex p-4 rounded-xl bg-gray-100 dark:bg-gray-700 mr-6 shrink-0"
                variants={iconContainerVariants}
              >
                {benefit.icon}
              </motion.div>

              <div className="relative inline-block">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {benefit.title}
                </h3>
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-blue-500 dark:bg-blue-400"
                  variants={underlineVariants}
                />
              </div>
            </div>

            {/* Description at the bottom */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {benefit.description}
            </p>

            {/* Subtle line that extends on hover */}
            <motion.div
              className="h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300 mt-6"
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
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <motion.button
            className="w-full p-6 flex justify-between items-center bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
            onClick={() => toggleAccordion(audience)}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-bold text-left flex items-center text-gray-900 dark:text-gray-100">
              {audience === "recruiters" && "For Recruiters"}
              {audience === "candidates" && "For Candidates"}
              {audience === "companies" && "For Companies"}
            </h3>
            <motion.div
              animate={{ rotate: expandedSection === audience ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
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
        <TabsList className="grid w-full grid-cols-3 mb-16 h-16 p-1 bg-gray-100/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
          {(Object.keys(benefitItems) as AudienceType[]).map((tab) => (
            <motion.div
              key={tab}
              animate={activeTab === tab ? "active" : "inactive"}
              variants={tabVariants}
              className="relative"
            >
              <TabsTrigger
                value={tab}
                className="text-lg py-4 w-full rounded-full relative z-10 text-gray-700 dark:text-gray-300 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400"
              >
                {tab === "recruiters" && "For Recruiters"}
                {tab === "candidates" && "For Candidates"}
                {tab === "companies" && "For Companies"}
              </TabsTrigger>
              {activeTab === tab && (
                <motion.div
                  className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-100 dark:border-gray-700"
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
      className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pb-5 pt-12 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-indigo-50 dark:bg-indigo-900/20 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-50 dark:bg-cyan-900/20 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            Benefits for Everyone
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform delivers unique advantages for recruiters, candidates,
            and companies alike.
          </p>
        </motion.div>

        {/* Conditionally render tabs or accordion based on screen size */}
        <div className="hidden md:block">{renderDesktopTabs()}</div>

        <div className="md:hidden">{renderMobileAccordion()}</div>
      </div>
    </section>
  );
}
