'use client';
import React from "react";
import { motion } from "framer-motion";import Image from "next/image"; // Ensure Image is imported if used

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const mockupVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.5 }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const DashboardOverviewSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="tech-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 0h50v50H0z" fill="none" />
            <circle cx="25" cy="25" r="1" fill="#33B1E1" />
            <path d="M0 0l50 50M50 0L0 50" stroke="#33B1E1" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#tech-pattern)" />
        </svg>
      </motion.div>

      <div className="relative z-10">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#33B1E1] to-blue-600 text-transparent bg-clip-text mb-4 text-center"
        >
          User Dashboard Overview
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="max-w-2xl mx-auto text-center text-gray-700 mb-12"
        >
          Experience our comprehensive platform—from pre-login services to full dashboard functionality.
          Your journey to efficient business management starts here.
        </motion.p>

        {/* Pre-login Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          {[
            {
              icon: "🏢",
              title: "Company Registration",
              desc: "Start your business journey with proper registration"
            },
            {
              icon: "💰",
              title: "Income Tax Return Filing",
              desc: "Streamline your tax filing process"
            },
            {
              icon: "🧠",
              title: "Logo & Patent Registration",
              desc: "Protect your intellectual property"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 flex flex-col items-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#33B1E1]/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center mb-6 shadow-inner">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-gray-800 group-hover:text-[#33B1E1] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Post-login Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col items-center mb-16"
        >
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text mb-8">Dashboard Features</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: "📅", title: "Service Booking" },
              { icon: "📜", title: "Order History" },
              { icon: "✅", title: "Task Tracking" },
              { icon: "🗂️", title: "Document Sharing" },
              { icon: "💬", title: "Team Chat" }
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
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          variants={mockupVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#33B1E1]/10 via-blue-100/10 to-[#33B1E1]/5 rounded-xl p-8 shadow-2xl relative overflow-hidden"
        >
          <Image
            src="/Group 9 (1).svg" // Ensure this image exists in your public folder
            alt="Dashboard Overview Mockup"
            width={1200} // Example width, adjust as needed
            height={800} // Example height, adjust as needed
            className="w-full h-auto rounded-lg shadow-inner"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardOverviewSection;