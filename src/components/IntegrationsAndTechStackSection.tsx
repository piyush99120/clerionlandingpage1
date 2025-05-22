'use client';
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  })
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const iconFloat = {
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function IntegrationsAndTechStackSection() {
  return (
    <section className="bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff] py-24 px-4 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#33B1E1]/20 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#33B1E1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          <span className="bg-gradient-to-r from-[#33B1E1] to-blue-600 text-transparent bg-clip-text">
            Integrations & Tech Stack
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16"
        >
          Powered by industry-leading technologies and services to ensure reliability, security, and scalability.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              icon: "💳",
              title: "Payment Gateway",
              description: "Secure payment processing with industry-standard encryption and multi-currency support"
            },
            {
              icon: "🔥",
              title: "Firebase Notifications",
              description: "Real-time notifications and updates for seamless communication and instant alerts"
            },
            {
              icon: "🐘",
              title: "Laravel Framework",
              description: "Robust backend architecture for reliable performance and scalable operations"
            },
            {
              icon: "💻",
              title: "SQL Database",
              description: "Efficient data management with advanced querying and secure storage solutions"
            }
          ].map((tech, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#33B1E1]/5 via-blue-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#33B1E1]/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
              <div className="relative z-10">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconFloat}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#33B1E1]/10 to-white flex items-center justify-center mb-6 shadow-inner"
                >
                  <span className="text-3xl">{tech.icon}</span>
                </motion.div>
                <h3 className="font-semibold text-xl text-gray-800 mb-3 group-hover:text-[#33B1E1] transition-colors duration-300">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}