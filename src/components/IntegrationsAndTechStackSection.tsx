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

export default function IntegrationsAndTechStackSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#33B1E1] mb-4 text-center"
        >
          Integrations & Tech Stack
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto text-center text-gray-700 mb-12"
        >
          Powered by industry-leading technologies and services to ensure reliability, security, and scalability.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: "💳",
              title: "Payment Gateway",
              description: "Secure payment processing with industry-standard encryption"
            },
            {
              icon: "🔥",
              title: "Firebase Notifications",
              description: "Real-time notifications and updates for seamless communication"
            },
            {
              icon: "🐘",
              title: "Laravel Framework",
              description: "Robust backend architecture for reliable performance"
            },
            {
              icon: "💻",
              title: "SQL Database",
              description: "Efficient data management and secure storage solutions"
            }
          ].map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04, borderColor: "#33B1E1", boxShadow: "0 8px 32px rgba(51,177,225,0.08)" }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{tech.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{tech.title}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}