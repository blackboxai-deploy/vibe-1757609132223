"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Features = () => {
  const features = [
    {
      title: "Responsive Web Development",
      description: "Create stunning websites that work flawlessly across all devices and browsers with modern, clean code.",
      icon: "💻",
      color: "from-purple-500 to-pink-500",
      benefits: ["Mobile-First Design", "Cross-Browser Compatible", "Fast Loading Speed"]
    },
    {
      title: "UI/UX Design Excellence",
      description: "Design intuitive user interfaces that provide exceptional user experiences and drive conversions.",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      benefits: ["User-Centered Design", "Conversion Optimization", "Brand Consistency"]
    },
    {
      title: "Digital Marketing Strategy",
      description: "Boost your online presence with data-driven marketing strategies that deliver measurable results.",
      icon: "📊",
      color: "from-green-500 to-emerald-500",
      benefits: ["SEO Optimization", "Social Media Marketing", "Analytics & Reporting"]
    },
    {
      title: "Brand Identity Design",
      description: "Build a memorable brand identity that resonates with your audience and stands out from competitors.",
      icon: "🏆",
      color: "from-orange-500 to-red-500",
      benefits: ["Logo Design", "Brand Guidelines", "Marketing Materials"]
    },
    {
      title: "E-commerce Solutions",
      description: "Launch and scale your online store with robust e-commerce platforms that drive sales and growth.",
      icon: "🛒",
      color: "from-indigo-500 to-purple-500",
      benefits: ["Secure Payment Systems", "Inventory Management", "Customer Analytics"]
    },
    {
      title: "Performance Optimization",
      description: "Maximize your website's speed, security, and search engine rankings with advanced optimization techniques.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      benefits: ["Speed Optimization", "Security Hardening", "SEO Enhancement"]
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Our Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Digital Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of digital services designed to elevate your business 
            and help you achieve your goals in the digital landscape.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-500">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mr-3`}></div>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Our team of experts is ready to bring 
              your vision to life with innovative solutions tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features