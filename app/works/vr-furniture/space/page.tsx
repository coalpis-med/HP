"use client"

import React from 'react';
import { motion } from 'framer-motion';

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
         VR内見システム
       </motion.h1>

       <div className="max-w-6xl mx-auto">
         <motion.div 
           className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 mb-12"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
         >
           <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
             空間の再現
           </h2>
           <p className="text-xl leading-relaxed text-gray-300 mb-8">
             廃業してしまった居酒屋をフォトグラメトリによりスキャンしたものです。
             細部の汚れまで忠実に再現しております。
           </p>

           <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
             <video
               className="w-full h-full object-cover"
               autoPlay
               loop
               muted
               playsInline
               controls
             >
               <source src="/heya.mp4" type="video/mp4" />
               お使いのブラウザは動画の再生に対応していません。
             </video>
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
           </div>
         </motion.div>
       </div>
     </motion.div>
   </div>
 );
}