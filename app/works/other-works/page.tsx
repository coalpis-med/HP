"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import iotImage from './iot.jpg';
import mobileImage from './app.jpg';
import printingImage from './3dpri.jpg';

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
            <div className="space-y-8">
              <div>
                <div className="relative w-full aspect-video">
                  <Image
                    src={iotImage}
                    alt="IoT Device"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="rounded-lg shadow-lg object-cover"
                    priority
                  />
                </div>
                <h2 className="text-3xl font-bold mt-4">IoTディバイス</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  最新のIoT技術を活用し、スマートホームや産業用のソリューションを提供しています。
                  センサーやデータ解析を駆使して、効率的でインテリジェントなシステムを構築します。
                </p>
                <Link
                  href="/works/other-works/iot"
                  className="inline-flex items-center text-blue-400 hover:text-blue-600 transition-colors mt-4"
                >
                  詳細を見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div>
                <div className="relative w-full aspect-video">
                  <Image
                    src={mobileImage}
                    alt="Mobile App"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mt-4">モバイルアプリ</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  ユーザーフレンドリーで直感的なモバイルアプリを開発しています。
                  iOSとAndroidの両方に対応し、ユーザー体験を最優先に考えたデザインと機能を提供します。
                </p>
                <Link
                  href="/works/other-works/app"
                  className="inline-flex items-center text-blue-400 hover:text-blue-600 transition-colors mt-4"
                >
                  詳細を見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div>
                <div className="relative w-full aspect-video">
                  <Image
                    src={printingImage}
                    alt="3D Printing"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mt-4">3Dプリント</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  高精度な3Dプリント技術を用いて、プロトタイプやカスタムパーツを製作しています。
                  多様な素材に対応し、迅速かつ高品質な製品を提供します。
                </p>
                <Link
                  href="/works/other-works/3dpri"
                  className="inline-flex items-center text-blue-400 hover:text-blue-600 transition-colors mt-4"
                >
                  詳細を見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}