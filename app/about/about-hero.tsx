"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const transitioningTexts = [
  "Transforming Homes, Elevating Lives",
  "Crafting Spaces, Creating Memories",
  "Innovative Designs, Timeless Quality",
  "Your Vision, Our Expertise",
  "Building Dreams, Exceeding Expectations"
]

export default function AboutHero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % transitioningTexts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/kitcheen-hero.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 rounded-md"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="z-20 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold mb-4"
        >
         Our services
        </motion.h1>
        <motion.p
          key={currentTextIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl mb-8"
        >
          {transitioningTexts[currentTextIndex]}
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg" className="text-lg">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

