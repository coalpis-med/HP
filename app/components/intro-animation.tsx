"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 5000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={onComplete}
      >
        <source src="/colapis.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 5, times: [0, 0.1, 0.9, 1] }}
      >
        <h1 className="text-6xl font-bold text-white">COLAPIS</h1>
      </motion.div>
    </motion.div>
  )
}