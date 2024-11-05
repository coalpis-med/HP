'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function OtherWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
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
          className="space-y-8"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent inline-flex items-center">
            <ArrowLeft className="mr-4 w-12 h-12" />
            その他の開発実績
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              AR技術やカスタムビジュアライゼーションなど、
              最新のテクノロジーを活用した多様なデジタルソリューションの開発実績があります。
              クライアントの具体的なニーズに応じて、革新的なソリューションを提供しています。
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed mt-6">
              詳細については、お気軽にお問い合わせください。
              プロジェクトの目的や要件に合わせて、最適なソリューションをご提案させていただきます。
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
