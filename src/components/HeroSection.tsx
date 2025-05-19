'use client';
import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamically import the Lottie Player with SSR disabled
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 min-h-screen flex items-start justify-center relative overflow-hidden pt-4 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-64 h-64"
        >
          <svg className="w-full h-full text-gray-200" fill="currentColor" viewBox="0 0 200 200">
            <path d="M40,0 L160,0 C180,0 200,20 200,40 L200,160 C200,180 180,200 160,200 L40,200 C20,200 0,180 0,160 L0,40 C0,20 20,0 40,0 Z" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 right-10 w-72 h-72"
        >
          <svg className="w-full h-full text-gray-200" fill="currentColor" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 pt-2"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-72 relative mb-4"
          >
            <Image
              src="/clerion-logo.png"
              alt="Clerion Logo"
              width={300}
              height={150}
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Title and Content */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Clarion: Smarter Project & Team Management
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-semibold text-[#33B1E1]"
          >
            Built for Chartered Accountants, Company Secretaries, and Legal Professionals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-700 text-lg max-w-xl"
          >
            Clarion is a specialized management platform designed for professional firms and individual practitioners. Effortlessly handle multiple clients, ensure efficient task tracking, secure communication, and streamlined document sharing—all in one place.
          </motion.p>

          {/* Floating Professional Icons */}
          <div className="flex gap-4 mt-8">
            {[
              { icon: "⚖️", label: "Legal" },
              { icon: "📊", label: "Tax" },
              { icon: "📋", label: "Compliance" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg flex flex-col items-center gap-2"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-gray-600">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - 3D Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_xyadoh9h.json"
            style={{ height: '100%', width: '100%' }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDownIcon className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}