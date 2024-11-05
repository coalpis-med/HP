"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function printerPage() {
  return (
    <div className="relative min-h-screen bg-black text-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-4 py-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          app
        </motion.h1>

        <motion.p
          className="text-2xl text-center text-gray-100 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
        </motion.p>

        <motion.p
          className="text-2xl text-center text-gray-100 max-w-3xl mx-auto mt-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          
        </motion.p>
      </motion.div>
    </div>
  );
}