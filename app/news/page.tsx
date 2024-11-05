"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Plus } from "lucide-react"
import { NewsCard } from "./components/news-card"

const newsCategories = [
  { id: "all", name: "全て" },
  { id: "press", name: "その他" },
  { id: "tech", name: "技術情報" },
  { id: "event", name: "イベント" }
]

const newsItems = [
  {
    id: 1,
    date: "2024.04.28",
    category: "press",
    tag: "プレスリリース",
    title: "ホームページの大幅更新をしました。",
    description: "ホームページをより見やすく回収いたしました。",
    highlight: true
  },
  {
    id: 2,
    date: "2024.03.10",
    category: "tech",
    tag: "技術情報",
    title: "地元メディアでの取材",
    description: "東奥日報様に取り上げていただきました。長年親しまれた弘前の居酒屋を保存したいと常連の方に依頼され、空間の再現を行いました。文化財の保存や、不動産内見を想定した技術を使い、写真データから3D空間を作成することで質感や部屋の構造をリアルに再現。現在はポインターによる移動や回転、自身の手を認識した家具の配置などが可能となっています。。"
  },
  
]

export default function News() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("news-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const filteredNews = activeFilter === "all"
    ? newsItems
    : newsItems.filter(item => item.category === activeFilter)

  return (
    <section id="news-section" className="relative py-24 px-4 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto pt-20">
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h4 className="text-sm font-semibold text-blue-400 mb-2">NEWS & TOPICS</h4>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                最新情報
              </h2>
            </div>
          </div>

          <div className="flex gap-2">
            {newsCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                  ${activeFilter === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-white/5 hover:bg-white/10 text-gray-300"}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {filteredNews.map((item, index) => (
            <NewsCard
              key={item.id}
              {...item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
            <Plus className="w-4 h-4" />
            もっと見る
          </button>
        </div>
      </div>
    </section>
  )
}