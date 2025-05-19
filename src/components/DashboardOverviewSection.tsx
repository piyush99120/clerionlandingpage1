'use client';
import React from "react";
import { motion } from "framer-motion";

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

export default function DashboardOverviewSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 relative overflow-hidden">
      {/* Tech Pattern Background */}
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
          className="text-3xl md:text-4xl font-bold text-[#33B1E1] mb-4 text-center"
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
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
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
              whileHover={{ scale: 1.08, boxShadow: "0 50px 90px rgba(0,0,0,0.12)" }}
              className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/50 flex flex-col items-center"
            >
              <span className="text-4xl mb-3">{item.icon}</span>
              <h3 className="font-semibold text-lg mb-2 text-black">{item.title}</h3>
              <p className="text-sm text-black text-center">{item.desc}</p>
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Dashboard Features</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
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
                whileHover={{ scale: 1.09, y: -8 }}
                className="bg-white rounded-lg p-4 shadow-md border border-[#33B1E1]/20 flex flex-col items-center"
              >
                <span className="text-2xl mb-2">{feature.icon}</span>
                <span className="text-sm font-medium text-gray-700 text-center">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          variants={mockupVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#33B1E1]/10 to-[#33B1E1]/5 rounded-xl p-6 shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="bg-white rounded-lg shadow-inner p-4 aspect-video flex items-center justify-center"
          >
            <img 
              src="/Group 9 (1).svg" 
              alt="Dashboard Interface"
              className="w-full h-auto rounded"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 400"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="%236b7280">Dashboard Preview</text></svg>';
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}