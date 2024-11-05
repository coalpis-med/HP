'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Sofa, Eye, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import kImage from './6K.jpg';
import sakuraImage from './sakura/sakurasei.jpg';
import kameraImage from './VRlive.jpg';
import { title } from 'process';
export default function VRFurnitureWorks() {
  const projects = [
    {
        title:"8K3Dの写真",
        description:"VR機器で再生した際もその場にいるような綺麗な映像を体験",
        icon:<Sofa className="w-6 h-6" />,
        image: sakuraImage,
        link:"/works/360-content/sakura"
    },

    {
      title: "6K3D360°映像",
      description: "６Kでの高画質で360°3Dの映像の作成。。",
      icon: <Sofa className="w-6 h-6" />,
      image: kImage,
      link: "https://www.youtube.com/watch?v=PBGbzvL-Esc"
    },
    {
        title:"360°Live配信",
        description:"リアルタイムでライブ配信を行うことが可能。",
        icon:<Sofa className="w-6 h-6" />,  
        image: kameraImage,
        link:"/works/360-content/kamera"
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <Link 
            href="/works" 
            className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Works
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-flex items-center">
              <Sofa className="mr-4 w-12 h-12" />
           360°3Dコンテンツ
            </h1>
            <p className="text-xl text-gray-400 mt-4 max-w-2xl">
              
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                      {project.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg">
                    {project.description}
                  </p>
                  
                  <Link
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>詳しく知る</span>
                    <Eye className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] group-hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={typeof project.image === 'string' ? project.image : project.image.src}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -z-10 w-full h-full -top-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
