"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import sakuraImage from './sakurasei.jpg';
export default function VRSystem() {
  return (
    <div className="relative min-h-screen bg-black text-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.1)_0%,transparent_100%)] pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-4 py-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl font-black mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          桜の8K360度写真
        </motion.h1>

        <motion.div 
          className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-2xl mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
            <Image
                src={sakuraImage}
                alt="桜の写真"
                width={1920}
                height={2000
                }
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>

        <motion.p
          className="mt-8 text-lg text-center text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          美しい桜の景色を8Kの高解像度でお楽しみください。
        </motion.p>
      </motion.div>
    </div>
  );
}