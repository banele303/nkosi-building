"use client"

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from 'next/image'

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & Lead Architect",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 20 years of experience, John leads our team with innovative design solutions and a passion for sustainable building practices."
  },
  {
    name: "Jane Smith",
    role: "Senior Interior Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jane's eye for detail and understanding of spatial dynamics helps create stunning, functional interiors that exceed client expectations."
  },
  {
    name: "Mike Johnson",
    role: "Master Carpenter",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Mike's craftsmanship and attention to detail ensure that every wooden element in our projects is of the highest quality."
  }
]

const faqs = [
  {
    question: "What is the history of Nkosiyami Building Contractors?",
    answer: "Nkosiyami Building Contractors was founded in 2005 with a vision to revolutionize the home renovation industry. We started as a small team of passionate builders and have grown into a full-service contracting company, known for our innovative designs and commitment to quality."
  },
  {
    question: "What certifications does your team hold?",
    answer: "Our team members hold various certifications including LEED (Leadership in Energy and Environmental Design), NARI (National Association of the Remodeling Industry), and several specialized trade certifications. We also ensure ongoing training to stay updated with the latest industry standards and technologies."
  },
  {
    question: "How do you ensure quality control in your projects?",
    answer: "We have a rigorous quality control process that includes regular site inspections, detailed checklists for each phase of the project, and a final walkthrough with the client. We also use advanced project management software to track progress and ensure all quality benchmarks are met."
  },
  {
    question: "What is your approach to sustainable and eco-friendly renovations?",
    answer: "Sustainability is at the core of our operations. We prioritize eco-friendly materials, energy-efficient designs, and waste reduction in all our projects. We also offer specific green renovation services, including solar panel installation and smart home energy management systems."
  }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold mb-8 md:text-center"
      >
        About Nkosiyami Building Contractors
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Nkosiyami Building Contractors has been serving the community with exceptional remodeling and construction services for over a decade. Our journey began with a passion for transforming spaces and a commitment to quality craftsmanship.
          </p>
          <p>
            Today, we&apos;re proud to be one of the leading contractors in the area, known for our attention to detail, innovative designs, and customer-first approach. Our team of experts combines traditional skills with cutting-edge technology to deliver outstanding results on every project.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At Nkosiyami Building Contractors, our mission is to bring our clients&apos; visions to life through expert craftsmanship and innovative design. We strive to exceed expectations in every project, big or small.
          </p>
          <p>
            We&apos;re committed to using sustainable practices and materials whenever possible, ensuring that our work not only looks great but also contributes to a better environment. Our goal is to create spaces that are not just beautiful and functional, but also energy-efficient and environmentally responsible.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Over 15 years of experience in the industry</li>
          <li>Fully licensed and insured professionals</li>
          <li>Commitment to quality and customer satisfaction</li>
          <li>Innovative designs and sustainable practices</li>
          <li>Transparent pricing and project management</li>
          <li>Use of advanced 3D modeling for project visualization</li>
          <li>Dedicated project manager for each renovation</li>
          <li>5-year warranty on all our work</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="bg-white rounded-lg p-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  )
}

