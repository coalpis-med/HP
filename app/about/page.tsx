"use client"

import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white pt-20">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-12 text-center">ABOUT</h1>
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">会社概要</h2>
          <p className="mb-6 text-lg leading-relaxed">
            COLAPISとは、CO =「集まる」LAPIS =「石」という語の組み合わせです。
            コンピューターの脳と言われるCPUは、鉱石から作られていることから「石」とも呼ばれています。
            さながらCPUのような、考える力を体現した集団が、CORAPISです。
          </p>
          <p className="text-lg leading-relaxed">
            「医師」のたまごである医学生が集まり設立したCORAPISは、医療現場へのITの導入を目指し、
            これからも最新技術を追い求め活動していきます。
          </p>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-700 pb-2">目標</h2>
          <p className="text-lg leading-relaxed">
            私たち株式会社COLAPISは、従来と異なる解像度を高めたIT技術の導入により
            スムーズな生活の提供を目指すべく活動しております。
          </p>
        </section>
      </div>
    </div>
  );
}