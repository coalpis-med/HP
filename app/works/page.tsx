'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Sofa, View, LayoutGrid, ArrowRight } from 'lucide-react';

export default function Works() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const works = [
    {
      id: '3d-modeling',
      title: '3Dモデリング',
      icon: <Package className="w-8 h-8" />,
      description: '高品質な3Dモデルの制作により、製品やコンセプトを立体的に表現。建築、製品デザイン、キャラクターなど、幅広い分野で活用可能なモデリングサービスを提供。',
      gradient: 'from-blue-500 to-purple-500',
      href: '/works/3d-modeling'
    },
    {
      id: 'vr-furniture',
      title: 'VR家具配置システム',
      icon: <Sofa className="w-8 h-8" />,
      description: 'VR技術を活用した革新的な家具配置システム。実寸大の家具を仮想空間に配置し、インテリアコーディネートを直感的にシミュレーション。',
      gradient: 'from-purple-500 to-pink-500',
      href: '/works/vr-furniture'
    },
    {
      id: '360-content',
      title: '360°3Dコンテンツ',
      icon: <View className="w-8 h-8" />,
      description: '没入感のある360度3D体験を提供。バーチャルツアー、展示会、不動産内覧など、様々なシーンで活用できるインタラクティブコンテンツを制作。',
      gradient: 'from-pink-500 to-red-500',
      href: '/works/360-content'
    },
    {
      id: 'other-works',
      title: 'その他',
      icon: <LayoutGrid className="w-8 h-8" />,
      description: 'AR開発、カスタムビジュアライゼーション、インタラクティブWebコンテンツなど、最新技術を活用した多様なデジタルソリューションを提供。',
      gradient: 'from-red-500 to-orange-500',
      href: '/works/other-works'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Works
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            最新技術を活用した革新的なデジタルソリューションを提供
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredCard(work.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <a
                href={work.href}
                className="block h-full"
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-800 h-full p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${work.gradient}`} />
                  
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${work.gradient}`}>
                      {work.icon}
                    </div>
                    <h2 className="text-2xl font-bold ml-4">{work.title}</h2>
                  </div>

                  <p className="text-gray-300 mb-6">
                    {work.description}
                  </p>

                  <div className={`flex items-center text-sm font-semibold transition-colors duration-300 ${
                    hoveredCard === work.id ? 'text-blue-400' : 'text-gray-400'
                  }`}>
                    詳しく見る
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>

                  <div className={`absolute bottom-0 right-0 w-32 h-32 opacity-10 transform transition-all duration-300 ${
                    hoveredCard === work.id ? 'scale-110 opacity-20' : 'scale-100'
                  }`}>
                    {work.icon}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}