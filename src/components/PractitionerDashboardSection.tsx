'use client';
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 }
  }
};

const iconFloat = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function PractitionerDashboardSection() {
  return (
    <section className="bg-gradient-to-b from-[#F0FAFF] to-white py-16 px-4">
      <div className="max-w-7xl mx-auto min-h-[600px]">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#33B1E1] mb-4 text-center"
        >
          Practitioner Dashboard
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto text-center text-gray-700 mb-12"
        >
          Streamline your practice with powerful tools designed for efficient case management and client communication.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-8"
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
                variants={cardVariants}
                whileHover={{ scale: 1.04, borderColor: "#33B1E1", boxShadow: "0 8px 32px rgba(51,177,225,0.08)" }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent"
              >
                <div className="flex items-start gap-4">
                  <motion.span className="text-3xl" animate="animate" variants={iconFloat}>{feature.icon}</motion.span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dashboard Image/Illustration */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-first md:order-last"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden transition-transform duration-300"
            >
              <img
                // src="/practitioner-dashboard.svg"
                alt="Practitioner Dashboard Interface"
                className="w-[100%] h-auto"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="%236b7280">Practitioner Dashboard Preview</text></svg>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#33B1E1]/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}