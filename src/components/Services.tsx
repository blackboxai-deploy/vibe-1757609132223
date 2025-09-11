"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web development services from concept to deployment, including responsive design and modern frameworks.",
      price: "Starting from $2,999",
      duration: "4-8 weeks",
      icon: "🌐",
      color: "from-blue-600 to-blue-800",
      features: [
        "Responsive Design",
        "Modern Frameworks (React, Next.js)",
        "Database Integration",
        "API Development",
        "SEO Optimization",
        "Performance Optimization"
      ],
      popular: false
    },
    {
      title: "UI/UX Design",
      description: "Complete design services including user research, wireframing, prototyping, and visual design for digital products.",
      price: "Starting from $1,999",
      duration: "3-6 weeks",
      icon: "🎨",
      color: "from-purple-600 to-purple-800",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design System",
        "Mobile App Design",
        "Usability Testing",
        "Design Guidelines"
      ],
      popular: true
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive qualified traffic to your business.",
      price: "Starting from $1,499/mo",
      duration: "Ongoing",
      icon: "📱",
      color: "from-green-600 to-green-800",
      features: [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Social Media Management",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      popular: false
    },
    {
      title: "Branding & Identity",
      description: "Complete brand identity design including logo, brand guidelines, and marketing materials to establish your brand.",
      price: "Starting from $1,299",
      duration: "2-4 weeks",
      icon: "🏆",
      color: "from-orange-600 to-red-600",
      features: [
        "Logo Design & Variations",
        "Brand Guidelines",
        "Business Card Design",
        "Letterhead & Stationery",
        "Marketing Materials",
        "Brand Strategy Consultation"
      ],
      popular: false
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Our team creates designs and develops your solution using the latest technologies and best practices.",
      icon: "⚙️"
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description: "Rigorous testing ensures everything works perfectly across all devices and browsers before launch.",
      icon: "🧪"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support to ensure continued success and optimal performance.",
      icon: "🚀"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Services for 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Every Need</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of digital services designed to help your business thrive 
            in the digital landscape. All packages include dedicated support and unlimited revisions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${service.popular ? 'border-2 border-purple-600 shadow-lg' : 'border-0'}`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl text-white mb-6`}>
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>

                {/* Price & Duration */}
                <div className="mb-6">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Working Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project is delivered on time, within budget, 
              and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl text-white mx-auto shadow-lg">
                    {process.icon}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-purple-600 font-bold text-sm px-3 py-1 rounded-full border-2 border-purple-600">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We create custom solutions tailored to your specific 
            business needs and requirements.
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services