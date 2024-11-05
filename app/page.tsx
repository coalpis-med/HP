"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IntroAnimation } from "./components/intro-animation"
import { Navigation } from "./components/navigation"
import { ServiceCard } from "./components/service-card"
import { Footer } from "./components/Footer" // Footer コンポーネントをインポート
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const currentYear = new Date().getFullYear()
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
                <Link href="/works">
                  <Button size="lg" className="group">
                    詳しく見る
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </header>

       

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
     
      </motion.div>
    </div>
  )
}