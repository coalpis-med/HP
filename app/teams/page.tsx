'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Building, Linkedin, Twitter } from 'lucide-react';

export default function Teams() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            {...fadeIn}
          >
            Our Team
          </motion.h1>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* CEO Card */}
          <motion.div 
            className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            {...fadeIn}
          >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="峯田 陽" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-3xl font-bold text-white mb-1">峯田 陽</h2>
                <p className="text-blue-400 text-lg">代表取締役</p>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-300">COLAPISの経営を担う。</p>
              <div className="flex items-center text-gray-400">
                <GraduationCap className="mr-2" size={18} />
                <p>弘前大学医学部在籍</p>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTO Card */}
          <motion.div 
            className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="成澤 木怜" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-3xl font-bold text-white mb-1">成澤 木怜</h2>
                <p className="text-purple-400 text-lg">取締役</p>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-300">COLAPISの技術全般を担う。</p>
              <div className="flex items-center text-gray-400">
                <GraduationCap className="mr-2" size={18} />
                <p>弘前大学医学部在籍　国際基督教大学(ICU)卒業</p>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Story */}
        <motion.div 
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <Building className="text-blue-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Our Story</h3>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>役員の二人はともに関東出身であり、弘前大学医学部医学科にて同学年として過ごす。</p>
            <p>代表の峯田は大学入学前から投資を行っており、経済への高い関心を持っていた。</p>
            <p>技術を担当する成澤はICU卒業後、IT企業を経て自身の技術を医療に導入する目標を掲げ医学部へ編入。</p>
            <p>経営にも関心があった峯田と、ITでの活動を考えていた成澤の両者によりCOLAPISが誕生。</p>
            <p>その他数人のメンバーと共に活動を続けている。</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}