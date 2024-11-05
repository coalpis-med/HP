//
"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components//ui/button"
import { IntroAnimation } from "./components/intro-animation"
import { Navigation } from "./components/navigation"
import { ServiceCard } from "./components/service-card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [currentYear] = useState(new Date().getFullYear())
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence>
        {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Navigation />

        {/* Hero Section */}
        <header className="relative h-screen">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u2752415496_A_sleek_and_futuristic_visual_design_for_COLAPIS__41260031-9090-441a-b43c-6fd178b1b5f3_0-hn93pAj7wg4yeJJlKR1HU91prrtEPn.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-6xl font-bold mb-4 text-white">COLAPIS</h2>
                <h3 className="text-4xl font-bold mb-6">3Dテクノロジーで未来を創造する</h3>
                <p className="text-xl mb-8">最先端の3Dモデリング、VR技術、360°コンテンツで、あなたのビジョンを実現します。</p>
                <Button size="lg" className="group">
                  詳しく見る
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section id="works" className="py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">サービス</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                title="3Dモデリング"
                description="様々な技術を用いた3Dオブジェクトの作成。"
              />
              <ServiceCard
                title="VR内見システム"
                description="VR空間内で自由に建物内の内見を可能としたシステム。"
              />
              <ServiceCard
                title="高画質360°3Dコンテンツ"
                description="VR機器で再生可能な高画質映像、写真の制作。"
              />
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">News</h2>
            <div className="space-y-8">
              <motion.div
                className="border-b border-zinc-800 pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-zinc-400 mb-2">2024/04/28</div>
                <p>ホームページの大幅更新をしました。</p>
              </motion.div>
              <motion.div
                className="border-b border-zinc-800 pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-zinc-400 mb-2">2024/03/29</div>
                <p>東奥日報様に取り上げていただきました。長年親しまれた弘前の居酒屋を保存したいと常連の方に依頼され、空間の再現を行いました。</p>
                <p className="mt-4">文化財の保存や、不動産内見を想定した技術を使い、写真データから3D空間を作成することで質感や部屋の構造をリアルに再現。現在はポインターによる移動や回転、自身の手を認識した家具の配置などが可能となっています。</p>
              </motion.div>
            </div>
            <Button variant="link" className="mt-8 group">
              過去ログ
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-zinc-900 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4">ABOUT</h3>
                <p>会社概要</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">WORKS</h3>
                <ul className="space-y-2">
                  <li>3Dモデリング</li>
                  <li>VR家具配置システム</li>
                  <li>高画質360°3Dコンテンツ</li>
                  <li>その他</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">NEWS</h3>
                <p>最新情報</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">CONTACT</h3>
                <p>問い合わせ</p>
              </div>
            </div>
            <div className="flex justify-center space-x-6 mb-8">
              <Facebook className="h-6 w-6 hover:text-blue-500 transition-colors" />
              <Twitter className="h-6 w-6 hover:text-blue-400 transition-colors" />
              <Instagram className="h-6 w-6 hover:text-pink-500 transition-colors" />
              <Youtube className="h-6 w-6 hover:text-red-500 transition-colors" />
            </div>
            <div className="text-center text-sm text-zinc-400">
              <p>© {currentYear} COLAPIS All Rights Reserved.</p>
              <p>《Web Design:Template-Party》</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}