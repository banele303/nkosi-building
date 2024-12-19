"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
              <img 
                src="/nkosi-logo.png" 
                alt="Freshmark Foods" 
                className="h-14 w-auto"
              />
            </Link>
        <nav className="hidden md:flex items-center space-x-6 text-md font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={pathname === item.path ? "text-foreground" : "text-foreground/60"}
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function MobileNav() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col space-y-3">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={pathname === item.path ? "text-foreground" : "text-foreground/60"}
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.span>
        </Link>
      ))}
    </div>
  )
}

