'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/adah-radah.png" alt="Adah Radah Company Logo" className="h-9 w-9 object-contain rounded-lg border border-border" />
            <span className="hidden font-bold text-foreground sm:inline-block text-lg">
              Adah <span className="font-extralight">Radah</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors"
            >
              About
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors flex items-center gap-1">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-card border border-border hidden group-hover:block">
                <div className="py-2">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 transition-colors"
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services/business-name-registration"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 transition-colors"
                  >
                    Business Registration
                  </Link>
                  <Link
                    href="/services/trademark-registration"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 transition-colors"
                  >
                    Trademark Protection
                  </Link>
                  <Link
                    href="/services/ngo-registration"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 transition-colors"
                  >
                    NGO Registration
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/faqs"
              className="px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors"
            >
              FAQs
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-3 ">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 p-5">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors"
            >
              About
            </Link>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="w-full text-left px-3 py-2 text-base font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors flex items-center justify-between"
            >
              Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {solutionsOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  href="/services"
                  className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 rounded-md transition-colors"
                >
                  All Services
                </Link>
                <Link
                  href="/services/business-name-registration"
                  className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 rounded-md transition-colors"
                >
                  Business Registration
                </Link>
                <Link
                  href="/services/trademark-registration"
                  className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 rounded-md transition-colors"
                >
                  Trademark Protection
                </Link>
                <Link
                  href="/services/ngo-registration"
                  className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 rounded-md transition-colors"
                >
                  NGO Registration
                </Link>
              </div>
            )}
            <Link
              href="/faqs"
              className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors"
            >
              FAQs
            </Link>
            <div className="pt-2">
              <Link href="/contact" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
