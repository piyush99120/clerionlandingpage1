'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 0h50v50H0z" fill="none" />
            <circle cx="25" cy="25" r="1" fill="#33B1E1" />
            <path d="M0 0l50 50M50 0L0 50" stroke="#33B1E1" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-stretch" // Changed to items-stretch
        >
          {/* Hero Content */}
          <motion.div
            variants={cardVariants}
            className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 relative overflow-hidden group flex flex-col justify-center min-h-[500px]" // Added flex, justify-center and min-height
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#33B1E1]/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-center"> // Added h-full and flex styles
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#33B1E1] to-blue-600 text-transparent bg-clip-text mb-8">
                Streamline Your Financial Operations
              </h1>
              <p className="text-gray-600 text-lg mb-12">
              Clarion is tailored for professional firms and individual practitioners like Chartered Accountants, Company Secretaries, and Lawyers. It enables seamless management of multiple clients simultaneously without losing track of communication, tasks, or critical data.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#33B1E1] to-blue-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow w-fit"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={cardVariants}
            className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 relative overflow-hidden group min-h-[500px]" // Added min-height
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#33B1E1]/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
            <div className="relative z-10">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/spreadsheet-document-information-financial-startup-concept.jpg"
                  alt="Financial Analytics Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Powerful Analytics</h3>
                <p className="text-sm text-gray-600">Track your financial data with our intuitive spreadsheet interface</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { icon: "🚀", title: "Quick Setup" },
            { icon: "🔒", title: "Secure Platform" },
            { icon: "📊", title: "Real-time Analytics" },
            { icon: "💡", title: "Smart Solutions" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#33B1E1]/10 flex flex-col items-center relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#33B1E1]/5 via-blue-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#33B1E1]/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B1E1]/10 to-white flex items-center justify-center mb-4 shadow-inner">
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 text-center block group-hover:text-[#33B1E1] transition-colors duration-300">{feature.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;