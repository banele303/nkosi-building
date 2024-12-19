"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import HomeHero from '@/components/home-hero'
import AboutUs from './about/about-us'

const services = [
  {
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a modern, functional space with our expert remodeling services. We specialize in custom cabinetry, countertop installation, and innovative design solutions that maximize both style and efficiency.',
    image: '/kt.jpg',
    alt: 'Modern kitchen with sleek countertops and custom cabinetry',
    link: '/services/kitchen-remodeling'
  },
  {
    title: 'Bathroom Renovation',
    description: 'Create your dream bathroom oasis with our comprehensive renovation services. From luxurious fixtures to custom tile work, well help you design a space that combines comfort, functionality, and style.',
    image: '/b2.jpg',
    alt: 'Elegant bathroom with modern fixtures and custom tilework',
    link: '/services/bathroom-remodeling'
  },
  {
    title: 'Expert Carpentry',
    description: 'Our skilled carpenters bring your vision to life with precision and craftsmanship. Whether its custom built-ins, intricate trim work, or structural renovations, we deliver quality results that stand the test of time.',
    image: '/c2.jpg',
    alt: 'Carpenter working on custom wooden cabinetry',
    link: '/c5.jpg'
  },
  {
    title: 'Professional Painting',
    description: 'Transform your space with our professional painting services. We offer expert color consultation, meticulous preparation, and flawless application to ensure a stunning finish that enhances your homes beauty.',
    image: '/painting.jpg',
    alt: 'Freshly painted living room with vibrant colors',
    link: '/services/painting'
  },
  {
    title: 'Plumbing Solutions',
    description: 'From minor repairs to major installations, our experienced plumbers handle all your plumbing needs. We ensure efficient, reliable solutions that keep your homes water systems running smoothly and safely.',
    image: '/b6.jpg',
    alt: 'Plumber installing new fixtures in a modern bathroom',
    link: '/services/plumbing'
  },
  {
    title: 'Tiling Expertise',
    description: 'Elevate your floors, walls, and backsplashes with our expert tiling services. We work with a wide range of materials and designs to create stunning, durable surfaces that enhance any room in your home.',
    image: '/taven.jpg',
    alt: 'Intricate tile work in a kitchen backsplash',
    link: '/services/carpentry-and-tiling'
  }
]

const faqs = [
  {
    question: "What sets Nkosiyami Building Contractors apart from other contractors?",
    answer: "At Nkosiyami, we combine cutting-edge technology with traditional craftsmanship. Our team uses advanced 3D modeling and virtual reality to help clients visualize their projects before we begin. This, coupled with our commitment to using eco-friendly materials and energy-efficient designs, sets us apart in delivering innovative, sustainable, and high-quality renovations."
  },
  {
    question: "How do you ensure project timelines are met?",
    answer: "We utilize state-of-the-art project management software that allows real-time updates and transparent communication. Our unique 'phase-locking' approach ensures each stage of the project is completed to perfection before moving to the next, minimizing delays and ensuring quality at every step."
  },
  {
    question: "What kind of warranty do you offer on your work?",
    answer: "We stand behind our work with an industry-leading 5-year warranty on all our renovations. This comprehensive warranty covers both materials and workmanship, giving our clients peace of mind long after the project is completed."
  },
  {
    question: "How do you handle unexpected issues during a project?",
    answer: "Our proactive approach includes thorough pre-project assessments using advanced diagnostic tools to identify potential issues before they arise. In the rare event of unexpected challenges, our dedicated problem-solving team is on standby to provide rapid, effective solutions without compromising the project timeline or budget."
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HomeHero />
      <AboutUs/>
      <div className="w-full bg-background">
        <div className="container mx-auto py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-6 border rounded-lg shadow-lg bg-card"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16"
          >



            <div className='flex items-center w-full justify-center my-[2rem]'>
            <Button asChild variant="outline">
                  <Link href='/services'>
                     More Services
                  </Link>
                </Button>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="bg-card rounded-lg p-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

