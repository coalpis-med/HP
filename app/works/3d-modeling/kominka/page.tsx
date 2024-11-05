'use client'
import React, { Suspense } from 'react';
import { Apple, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import appleModel from './kominka.glb';
import { EDGE_UNSUPPORTED_NODE_APIS } from 'next/dist/shared/lib/constants';

function ModelViewer({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      scale={[0.8, 0.8, 0.8]}
      position={[0, -1, 0]}
    />
  );
}

export default function ModelingWorks2() {
    const project = {
      title: "3Dモデリング",
      description: "様々な要望に合わせ、３Dモデルの製作が可能。また、３Dプリンタ向けの設計も可能です。",
      icon: <Apple className="w-6 h-6" />,
      glb: appleModel,
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* ナビゲーションとの重なりを防ぐためのスペーサー */}
        <div className="h-24"></div>
        
        <div className="container mx-auto px-4 py-12 relative">
          <Link 
            href="/works/3d-modeling"
            className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            戻る
          </Link>
  
          <div className="text-center mb-16 space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-8">
              {project.icon}
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="w-full h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border border-gray-700">
          <Canvas
            camera={{ position: [0, 6, 15], fov: 50 }}
            shadows
            className="w-full h-full"
          >
            <ambientLight intensity={0.5} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
              castShadow
            />
            <Suspense fallback={null}>
              <ModelViewer url={project.glb} />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

