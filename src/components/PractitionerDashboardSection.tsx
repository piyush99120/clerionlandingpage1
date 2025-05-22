'use client';
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

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

const laptopVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

export default function PractitionerDashboardSection() {
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
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-[#33B1E1]/20 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-blue-500/20 rounded-full blur-3xl" />
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
            <pattern id="practitioner-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#33B1E1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#practitioner-grid)" />
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
            Practitioner Dashboard
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16"
        >
          Streamline your practice with powerful tools designed for efficient case management and client communication.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Cards - Now on the right side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-2"
          >
            {[
              { icon: "💬", title: "Chat with Users", description: "Secure and instant messaging platform for client communication" },
              { icon: "📆", title: "Task Timeline", description: "Comprehensive timeline view of daily and scheduled tasks" },
              { icon: "📂", title: "Active Case Monitoring", description: "Real-time overview and tracking of all open cases" },
              { icon: "✅", title: "Accept / Reject Tasks", description: "Flexible task management with acceptance controls" },
              { icon: "🧾", title: "Notes & Uploads", description: "Document sharing and case update management" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, translateX: -10 }}
                className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-[#33B1E1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconFloat}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#33B1E1]/10 to-blue-500/10 flex items-center justify-center"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-[#33B1E1] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Laptop Mockup - Now on the left side */}
          <motion.div
            variants={laptopVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative bg-gradient-to-tr from-gray-900 to-gray-800 rounded-t-2xl p-4 shadow-2xl">
              <div className="absolute top-1.5 left-4 flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div className="pt-4">
                <img
                  src="/Screenshot 2025-05-22 162323.png"
                  alt="Practitioner Dashboard Interface"
                  className="w-full h-auto rounded-lg shadow-inner"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="%236b7280">Practitioner Dashboard Preview</text></svg>';
                  }}
                />
              </div>
            </div>
            <div className="h-4 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-b-lg mx-auto w-[95%]" />
            <div className="h-1 bg-gradient-to-tr from-gray-700 to-gray-600 rounded-b-lg mx-auto w-[90%]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}