"use client";

import { motion, Variants } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCircle, Building2, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AudienceBenefits() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const listItem: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #3B82F6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Benefits for Everyone
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ProveIt creates value for all stakeholders in the hiring process.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="candidates" className="max-w-5xl mx-auto">
          <TabsList className="flex w-full justify-between space-x-2 rounded-full bg-blue-100/50 p-1 dark:bg-blue-900/20 mb-8">
            <TabsTrigger
              value="candidates"
              className="flex-1 flex items-center justify-center space-x-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-sm"
            >
              <UserCircle className="h-5 w-5 mr-2" />
              <span>For Candidates</span>
            </TabsTrigger>
            <TabsTrigger
              value="recruiters"
              className="flex-1 flex items-center justify-center space-x-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-sm"
            >
              <Building2 className="h-5 w-5 mr-2" />
              <span>For Recruiters</span>
            </TabsTrigger>
            <TabsTrigger
              value="investors"
              className="flex-1 flex items-center justify-center space-x-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-sm"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              <span>For Investors</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="candidates">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  For Job Seekers
                </h3>
                <motion.ul variants={container} className="space-y-4">
                  {[
                    "Showcase your real-world skills beyond what's on your resume",
                    "Receive fair, objective assessments based on your actual abilities",
                    "Get detailed feedback to improve your skills, even if you don't get the job",
                    "Experience less stressful interviews in a comfortable environment",
                    "Stand out from other candidates with comprehensive skill demonstrations",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={listItem}
                      className="flex items-start group"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {text}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div
                variants={item}
                className="relative bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 dark:from-blue-500/5 dark:via-blue-600/5 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Candidate using ProveIt"
                  className="w-full h-auto rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={300}
                />
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="recruiters">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  For Recruiters
                </h3>
                <motion.ul variants={container} className="space-y-4">
                  {[
                    "Make data-driven hiring decisions based on objective metrics",
                    "Reduce bad hires and improve team performance",
                    "Streamline the interview process and save valuable time",
                    "Evaluate candidates on skills that directly relate to job requirements",
                    "Access detailed performance reports for easier comparison between candidates",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={listItem}
                      className="flex items-start group"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {text}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div
                variants={item}
                className="relative bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 dark:from-blue-500/5 dark:via-blue-600/5 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Recruiter using ProveIt"
                  className="w-full h-auto rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={300}
                />
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="investors">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  For Investors
                </h3>
                <motion.ul variants={container} className="space-y-4">
                  {[
                    "Tap into the $200B+ global recruitment market",
                    "Invest in a platform that addresses a universal pain point in hiring",
                    "Benefit from a scalable SaaS model with recurring revenue",
                    "Support technology that improves diversity and reduces bias in hiring",
                    "Join early in a revolutionary approach to talent acquisition",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={listItem}
                      className="flex items-start group"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {text}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div
                variants={item}
                className="relative bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 dark:from-blue-500/5 dark:via-blue-600/5 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Investment growth chart"
                  className="w-full h-auto rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={300}
                />
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
