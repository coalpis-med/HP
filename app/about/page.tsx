"use client"

import React from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';

export default function About() {
 return (
   <div className="relative min-h-screen bg-black text-white pt-20">
     <BackgroundAnimation />
     
     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black pointer-events-none" />
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.1)_0%,transparent_100%)] pointer-events-none" />
     
     <motion.div 
       className="container mx-auto px-4 py-12 relative z-10"
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
     >
       <motion.h1 
         className="text-7xl font-black mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.2 }}
       >
         ABOUT
       </motion.h1>

       <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
         <motion.section 
           className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors duration-500"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
         >
           <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
             Origin Story
           </h2>
           <div className="space-y-4 text-gray-300">
             <p className="text-lg leading-relaxed">
               COLAPISとは、CO =「集まる」LAPIS =「石」という語の組み合わせです。
               コンピューターの脳と言われるCPUは、鉱石から作られていることから「石」とも呼ばれています。
             </p>
             <p className="text-lg leading-relaxed">
               さながらCPUのような、考える力を体現した集団が、COLAPISです。
               「医師」のたまごである医学生が集まり設立したCOLAPISは、医療現場へのITの導入を目指し、
               これからも最新技術を追い求め活動していきます。
             </p>
           </div>
         </motion.section>

         <motion.section 
           className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors duration-500"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
         >
           <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
             Vision
           </h2>
           <div className="space-y-4 text-gray-300">
             <p className="text-lg leading-relaxed">
               私たち株式会社COLAPISは、従来と異なる解像度を高めたIT技術の導入により
               スムーズな生活の提供を目指すべく活動しております。
             </p>
             <p className="text-lg leading-relaxed">
               最先端のテクノロジーと医療の知見を組み合わせ、
               誰もが安心して使える革新的なソリューションを提供していきます。
             </p>
           </div>
         </motion.section>
       </div>

       <motion.div 
         className="mt-16 space-y-6 text-center text-gray-300"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.8 }}
       >
         <h2 className="text-3xl font-semibold">会社情報</h2>
         <p><span className="font-bold">株式会社COLAPIS</span></p>
         <p><span className="font-bold">設立</span>: 2024年2月20日</p>
         <p><span className="font-bold">所在地</span>: 青森県弘前市銅屋町８番地メゾンド FOR S 201号室</p>
         <p><span className="font-bold">代表取締役</span>: 峯田陽</p>
       </motion.div>

       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
     </motion.div>
   </div>
 );
}
