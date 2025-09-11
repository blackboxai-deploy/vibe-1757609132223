"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const About = () => {
  const achievements = [
    { number: "500+", label: "Successful Projects" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years of Excellence" },
    { number: "24/7", label: "Support Available" }
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions that set your business apart.",
      icon: "💡"
    },
    {
      title: "Quality Driven",
      description: "Every project receives meticulous attention to detail, ensuring exceptional results that exceed expectations.",
      icon: "⚡"
    },
    {
      title: "Client Focused",
      description: "Your success is our priority. We work closely with you to understand your vision and bring it to life.",
      icon: "🎯"
    },
    {
      title: "Results Oriented",
      description: "We don't just build websites; we create digital experiences that drive engagement and business growth.",
      icon: "📈"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            About Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Crafting Digital Excellence Since 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> 2019</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of designers, developers, and digital strategists dedicated to transforming 
            businesses through innovative digital solutions. Our mission is to bridge the gap between creativity 
            and technology to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl transform -rotate-3"></div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee6cd664-4c1e-46b1-b36b-57de19cf7dfa.png" 
                alt="Professional diverse team working on laptops in modern office environment with creative design elements"
                className="w-full h-auto rounded-3xl shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dfc58180-9ef2-4815-a9ed-3943f9af88e7.png";
                  target.alt = "Our Professional Team";
                }}
              />
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    99%
                  </div>
                  <div className="text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Why Choose CreativeAI?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in the digital landscape, we've helped hundreds of businesses 
                establish their online presence and achieve their goals. Our comprehensive approach 
                combines strategic thinking with creative execution to deliver solutions that not only 
                look great but also perform exceptionally.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From startups to established enterprises, we understand that every business is unique. 
                That's why we take the time to understand your specific needs, challenges, and objectives 
                before crafting a tailored solution that drives real results.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-4 border-0 bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-purple-600">{achievement.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About