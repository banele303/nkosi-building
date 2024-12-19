"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

const galleryCategories = [
  "All",
  "Kitchen",
  "Bathroom",
  "Plumbing",
  "Carpentry",
  "Painting",
  "Tiling"
]

const galleryItems = [
  { src: '/b2.jpg', alt: 'Kitchen Remodel', category: 'Kitchen' },
  { src: '/c7.jpg', alt: 'Bathroom Renovation', category: 'Bathroom' },
  { src: '/c5.jpg', alt: 'Plumbing Work', category: 'Plumbing' },
  { src: '/installation.jpg', alt: 'Carpentry Project', category: 'Carpentry' },
  { src: '/kit4.jpg', alt: 'Painting Job', category: 'Painting' },
  { src: '/p1.jpg', alt: 'Tiling Work', category: 'Tiling' },
  { src: '/p.jpg', alt: 'Tiling Work 2', category: 'Tiling' },
  { src: '/kt5.jpg', alt: 'Tiling Work 3', category: 'Tiling' },
  { src: '/p8.jpg', alt: 'Tiling Work 4', category: 'Tiling' },
  { src: '/taven.jpg', alt: 'Tiling Work 5', category: 'Tiling' },
  { src: '/painting.jpg', alt: 'Painting Work', category: 'Painting' },
  { src: '/roof.jpg', alt: 'Roof Work', category: 'Roofing' },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter)

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Our Work Gallery
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {galleryCategories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
            size="sm"
            className="min-w-[100px] text-sm"
          >
            {category}
          </Button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        layout
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              layout
              className="relative group"
            >




              <div className="aspect-square relative overflow-hidden rounded-lg p-[2rem]">
                <div className="relative h-[200px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={200}
                    height={200}
                    className="rounded-lg w-[40vh]"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="text-white border-white"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    View
                  </Button>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full">
            <div className="relative w-full aspect-video">
              <Image
                src={selectedImage}
                alt="Selected Image"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
