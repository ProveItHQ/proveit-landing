"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// FAQ component with Tailwind styling
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes ProveIt different from traditional interviews?",
      answer:
        "Unlike traditional interviews that rely on theoretical questions or resume screening, ProveIt creates real-world project environments where candidates can demonstrate practical skills that actually matter on the job. Our platform tracks meaningful performance indicators across various disciplines—from coding and design to project management and data analysis—focusing on how candidates solve problems rather than what they've memorized.",
    },
    {
      question: "What types of roles can ProveIt assess?",
      answer:
        "ProveIt supports assessments for a wide range of roles including software engineers, data scientists, UX/UI designers, product managers, marketing analysts, financial analysts, project managers, DevOps specialists, and more. Our customizable project environments can be tailored to virtually any role where practical skills matter more than theoretical knowledge.",
    },
    {
      question: "How does the ProveIt assessment environment work?",
      answer:
        "Our platform provides role-specific project environments with all the tools candidates need to complete realistic tasks. Depending on the role, this might include development environments, design tools, data analysis platforms, project management software, or marketing analytics tools. Candidates receive clear requirements and are evaluated on their implementation, problem-solving approach, and decision-making—all in environments that mirror real work scenarios.",
    },
    {
      question: "Can organizations customize the assessment experience?",
      answer:
        "Absolutely! Organizations can specify which skills to test, what metrics to track, and even customize the AI assistants available to candidates. You can create role-specific assessments that align with your actual job requirements, ensuring you evaluate candidates on competencies that matter for your team and company culture.",
    },
    {
      question: "How does ProveIt reduce hiring bias?",
      answer:
        "By focusing on objective skill demonstration rather than resume credentials or subjective interviews, ProveIt helps reduce unconscious bias in the hiring process. Our AI evaluates performance based on predefined metrics, ensuring all candidates are assessed on the same criteria regardless of background, education, or personal connections.",
    },
    {
      question: "What metrics does ProveIt track during assessments?",
      answer:
        "ProveIt tracks role-specific performance indicators that matter for job success. For technical roles, this includes code quality and system design; for designers, it might include user-centered thinking and visual communication; for analysts, data interpretation and insight generation; and for managers, resource allocation and prioritization skills. All assessments measure problem-solving approach, attention to detail, and efficiency.",
    },
    {
      question: "How do candidates benefit from the ProveIt process?",
      answer:
        "Candidates receive a more engaging, realistic assessment experience that actually relates to their future job. They can showcase their practical abilities rather than just talking about them. Additionally, all candidates receive detailed feedback reports highlighting their strengths and areas for improvement—making the interview process valuable even if they don't get the job.",
    },
    {
      question: "Is ProveIt secure for both candidates and organizations?",
      answer:
        "Yes, security is a top priority. All project environments are isolated, work is securely stored, and we implement strict access controls. Organizations can also enable proctoring features if desired for additional security during the assessment process.",
    },
  ];

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        damping: 25,
      },
    },
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
      id="faq"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to know about ProveIt&apos;s revolutionary
            interview platform
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`cursor-pointer transition-colors duration-200 ${
                  openIndex === index
                    ? "bg-blue-50 dark:bg-gray-700/50"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700/30"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-blue-600 dark:text-blue-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </span>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
