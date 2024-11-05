'use client'
import React from 'react';
import { Apple, Building, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import appleImage from './apple.png';
import kominseiImage from './kominsei.jpg';
import roomImage from './roomsei.jpg';

export default function ModelingWorks() {
  const projects = [
    {
      title: "りんごの3Dモデル",
      description: "りんごを3Dスキャンしたもの。テスクチャも実写を貼っており、リアルな表現が可能。",
      icon: <Apple className="w-6 h-6" />,
      image: appleImage,
      link: "/works/3d-modeling/apple"
    },
    {
      title: "3Dモデリング",
      description: "様々な要望に合わせ、3Dモデルの製作が可能。 また、3Dプリンタ向けの設計も可能です。",
      icon: <Building className="w-6 h-6" />,
      image: kominseiImage,
      link: "/works/3d-modeling/kominka"
    },
    {
      title: "部屋の3Dスキャン",
      description: "モデリングでは再現が難しい複雑な形状の建築物に対し、 フォトグラメトリを用いることでのモデリングが可能。",
      icon: <Building className="w-6 h-6" />,
      image: roomImage,
      link: "/works/3d-modeling/room"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            3D Modeling Works
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {project.icon}
                <h2 className="text-xl font-bold ml-2">{project.title}</h2>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="relative overflow-hidden rounded-lg h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>
              <Link href={project.link} className="text-blue-500 hover:underline mt-4 block">
                詳細を見る
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/works" className="text-blue-500 hover:underline flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
