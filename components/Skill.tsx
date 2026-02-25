"use client";

import type React from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/ui/SkillCard";
import { FaReact, FaWordpress, FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPython } from "react-icons/bi";
import { SiNextdotjs, SiOpenai, SiSanity, SiTailwindcss, SiSqlite, SiPrisma, SiPostgresql } from "react-icons/si";

const skills = [
  // AI & Automation (Primary Focus)
  {
    icon: <SiOpenai />,
    title: "AI Model Integration",
    description: "Leading integration of AI models into client-facing products for complex query handling.",
    progress: 85,
  },
  {
    icon: <BiLogoPython />,
    title: "Python Automation",
    description: "Building intelligent automation systems and business workflow optimization scripts.",
    progress: 85,
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js Full-Stack",
    description: "Developing modern web applications with robust frontend and backend architecture.",
    progress: 90,
  },
  {
    icon: <FaReact />,
    title: "React.js",
    description: "Creating interactive UIs with component-based architecture for client-facing products.",
    progress: 85,
  },
  {
    icon: <BiLogoTypescript />,
    title: "TypeScript",
    description: "Ensuring type safety and scalability in production-ready applications.",
    progress: 85,
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    description: "Crafting responsive designs that deliver measurable user experience improvements.",
    progress: 90,
  },

  // Backend & API
  {
    icon: <FaNodeJs />,
    title: "Node.js APIs",
    description: "Building backend services and API integrations for automation workflows.",
    progress: 80,
  },
  {
    icon: <SiPostgresql />,
    title: "PostgreSQL",
    description: "Database management for robust data handling in business applications.",
    progress: 75,
  },
  {
    icon: <SiPrisma />,
    title: "Prisma ORM",
    description: "Efficient database interactions with type-safe TypeScript integration.",
    progress: 75,
  },
  {
    icon: <SiSanity />,
    title: "Sanity CMS",
    description: "Headless CMS integration for dynamic content management.",
    progress: 80,
  },

  // Additional Skills
  {
    icon: <SiSqlite />,
    title: "SQLite",
    description: "Lightweight database solutions for automation scripts and tools.",
    progress: 75,
  },
  {
    icon: <FaWordpress />,
    title: "WordPress",
    description: "Custom theme development for business websites and e-commerce.",
    progress: 80,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Skill: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Global SVG Gradient for CircularProgressbar */}
        <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FECD1A" />
              <stop offset="100%" stopColor="#64F4AB" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-base text-accent font-medium sm:text-lg mb-2">
            Expertise
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A robust full-stack toolkit for building production-ready applications. Specialized in AI model integration, intelligent automation systems, chatbots that handle complex queries, and business workflow optimization,delivering measurable results in efficiency and conversion rates.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                progress={skill.progress}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skill;
