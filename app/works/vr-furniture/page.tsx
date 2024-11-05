'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Sofa, Eye, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import freeImage from './free.jpg';

import spaceImage from './space.jpg';
import kaguImage from './kagu.jpg';
export default function VRFurnitureWorks() {
  const projects = [
    {
      title: "自由自在な移動空間の再現",
      description: "6dofに対応。ハンドトラッキングを用い、手の動きを使うことで直感的に空間を移動。",
      icon: <Sofa className="w-6 h-6" />,
      image: freeImage,
      link: "/works/vr-furniture/free"
    },
    {
      title: "空間の再現",
      description: "オフィススペースに家具を配置し、VRでシミュレーション。",
      icon: <Sofa className="w-6 h-6" />,
      image: spaceImage,
      link: "/works/vr-furniture/space"
    },
    {
      title: "家具の配置",
      description: "家具の詳細をVRで確認し、購入を検討。",
      icon: <Sofa className="w-6 h-6" />,
      image: kaguImage,
      link: "/works/vr-furniture/furniture"
    },
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
              VR家具配置システム
            </h1>
            <p className="text-xl text-gray-400 mt-4 max-w-2xl">
              VR技術を活用した革新的な家具配置システム。
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
                    <span>さらに詳しく</span>
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
