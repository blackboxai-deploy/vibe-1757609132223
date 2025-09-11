"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              CreativeAI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header