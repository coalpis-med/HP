"use client"

import { Calendar, Tag, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface NewsCardProps {
  date: string
  category: string
  tag: string
  title: string
  description: string
  highlight?: boolean
  index: number
  isVisible: boolean
}

export function NewsCard({
  date,
  category,
  tag,
  title,
  description,
  highlight,
  index,
  isVisible
}: NewsCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={`relative p-6 rounded-xl backdrop-blur-sm border transition-all duration-300
          ${highlight
            ? "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/30"
            : "bg-white/5 border-white/10 hover:border-white/20"}`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              {date}
            </div>
            <div
              className={`flex items-center px-3 py-1 rounded-full text-xs
                ${highlight ? "bg-blue-500/20 text-blue-300" : "bg-white/10 text-gray-300"}`}
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="text-lg font-medium mb-2 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-white/20 flex items-center justify-center transition-all">
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transform group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}