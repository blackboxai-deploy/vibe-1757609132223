"use client"

import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#services" },
        { name: "UI/UX Design", href: "#services" },
        { name: "Digital Marketing", href: "#services" },
        { name: "Branding & Identity", href: "#services" },
        { name: "E-commerce Solutions", href: "#services" },
        { name: "Mobile App Development", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#about" },
        { name: "Careers", href: "#contact" },
        { name: "Case Studies", href: "#testimonials" },
        { name: "Blog", href: "#contact" },
        { name: "Press", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "FAQ", href: "#contact" },
        { name: "Documentation", href: "#contact" },
        { name: "Terms of Service", href: "#contact" },
        { name: "Privacy Policy", href: "#contact" },
        { name: "Cookie Policy", href: "#contact" }
      ]
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      href: "https://linkedin.com/company/creativeai",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: "🐦",
      href: "https://twitter.com/creativeai",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: "📷",
      href: "https://instagram.com/creativeai",
      color: "hover:text-pink-600"
    },
    {
      name: "Facebook",
      icon: "📘",
      href: "https://facebook.com/creativeai",
      color: "hover:text-blue-700"
    },
    {
      name: "YouTube",
      icon: "📺",
      href: "https://youtube.com/creativeai",
      color: "hover:text-red-600"
    },
    {
      name: "GitHub",
      icon: "🐙",
      href: "https://github.com/creativeai",
      color: "hover:text-gray-800"
    }
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                CreativeAI
              </h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Transforming businesses through innovative digital solutions. We create stunning websites, 
                powerful applications, and effective marketing strategies that drive growth and success.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <span className="mr-3">📧</span>
                <a href="mailto:hello@creativeai.com" className="hover:text-white transition-colors duration-300">
                  hello@creativeai.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-3">📱</span>
                <a href="tel:+15551234567" className="hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-3">📍</span>
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest News</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for industry insights, tips, and updates on our latest projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} CreativeAI. All rights reserved. Crafted with ❤️ for digital excellence.
            </div>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('#home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        title="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  )
}

export default Footer