"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1)_0%,transparent_60%)]" />
      
      {/* Animated background lines */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent top-1/4" />
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent top-2/4" />
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent top-3/4" />
      </motion.div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 py-24 min-h-screen flex flex-col justify-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-7xl font-black mb-12 tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
              CONTACT
            </span>
          </motion.h1>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <p className="text-3xl font-light text-gray-400 mb-12">お問い合わせ</p>
              <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                お問い合わせは以下のメールアドレスまでお願いします。
              </p>
              
              <motion.div
                className="group relative inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href="mailto:contact@colapis.co.jp" 
                  className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
                >
                  contact@colapis.co.jp
                </a>
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/2 right-12 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-12 w-24 h-24 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}