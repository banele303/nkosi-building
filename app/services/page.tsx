"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import AboutHero from '../about/about-hero'

const services = [
  {
    category: "Renovations",
    description: "Transform your living spaces with our comprehensive renovation services. From kitchens to bathrooms and complete home makeovers, we bring your vision to life.",
    image: "/p3.jpg",
    items: [
      "Kitchen Remodeling",
      "Bathroom Revamps",
      "Complete Home Renovations",
      "Extensions"
    ]
  },
  {
    category: "Carpentry",
    description: "Our expert carpenters craft beautiful, functional wooden elements for your home. From doors to ceilings, we ensure precision and quality in every project.",
    image: "/c2.jpg",
    items: [
      "Door Installation",
      "Ceiling Installation",
      "Partitions",
      "Roof Installation",
      "Skirtings and Architraves"
    ]
  },
  {
    category: "Plumbing",
    description: "Keep your home's water systems running smoothly with our professional plumbing services. We handle everything from repairs to new installations.",
    image: "/b6.jpg",
    items: [
      "General Plumbing Services",
      "Bathroom Fixtures",
      "Kitchen Plumbing"
    ]
  },
  {
    category: "Finishes",
    description: "Add the perfect finishing touches to your home with our expert tiling, painting, and roofing services. We ensure a polished look for every surface.",
    image: "/c3.jpg",
    items: [
      "Tiling",
      "Painting",
      "Under Roof Sheeting"
    ]
  },
  {
    category: "Outdoor",
    description: "Enhance your home's exterior with our range of outdoor services. From tree management to paving, we help create beautiful, functional outdoor spaces.",
    image: "/p4.jpg",
    items: [
      "Tree Felling",
      "Rubble Removal",
      "Paving",
      "Concreting Gutters",
      "Boundary Walls"
    ]
  },
  {
    category: "Roofing",
    description: "Protect your home from the elements with our comprehensive roofing services. We specialize in repairs, waterproofing, and aesthetic improvements.",
    image: "/roof.jpg",
    items: [
      "Fascia Boards",
      "Barge Boards",
      "Roof Leak Repairs",
      "Waterproofing"
    ]
  },
  {
    category: "Installations",
    description: "Upgrade your home with our professional installation services. We offer top-quality aluminium windows, shower doors, and sliding doors for enhanced functionality and style.",
    image: "/c7.jpg",
    items: [
      "Aluminium Windows",
      "Shower Doors",
      "Sliding Doors"
    ]
  },
  {
    category: "Electrical",
    description: "Ensure your home's electrical systems are safe and efficient with our professional electrical services. From repairs to new installations, we've got you covered.",
    image: "/installation.jpg",
    items: [
      "General Electrical Work",
      "Lighting Installation",
      "Electrical Repairs"
    ]
  }
]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredServices = services.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0)

  return (
    <div className="container mx-auto py-12">
        <AboutHero/>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Our Comprehensive Services
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredServices.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <Image
                src={category.image}
                alt={category.category}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Our Services Include:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Space?</h2>
        <Button asChild size="lg">
          <Link href="/contact">Get a Free Consultation</Link>
        </Button>
      </motion.div>
    </div>
  )
}

