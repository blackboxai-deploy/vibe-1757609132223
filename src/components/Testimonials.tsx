"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStartup Inc",
      company: "TechStartup Inc",
      content: "Working with CreativeAI was an absolute game-changer for our business. They delivered a stunning website that perfectly captures our brand identity and has significantly improved our conversion rates. The team's attention to detail and professional approach exceeded all our expectations.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24a3c761-0e04-4423-9331-295923edb008.png",
      rating: 5,
      project: "Complete Website Redesign"
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthCorp",
      company: "GrowthCorp",
      content: "The digital marketing strategy developed by CreativeAI has transformed our online presence. Our organic traffic increased by 300% within six months, and our lead generation has never been stronger. Their data-driven approach and creative campaigns deliver real results.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/adf5a0d8-3572-40ef-aade-62a31d812e89.png",
      rating: 5,
      project: "Digital Marketing Campaign"
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, BoutiqueStyle",
      company: "BoutiqueStyle",
      content: "CreativeAI created a beautiful e-commerce platform that has revolutionized how we do business online. The user experience is seamless, and our customers love the new design. Sales have increased by 250% since the launch, and the ongoing support has been exceptional.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f74d8830-9461-4a38-9b7d-65558eecedb4.png",
      rating: 5,
      project: "E-commerce Development"
    },
    {
      name: "David Thompson",
      position: "CTO, InnovateLab",
      company: "InnovateLab",
      content: "The team at CreativeAI demonstrated exceptional technical expertise and creativity in developing our complex web application. They understood our vision perfectly and delivered a solution that not only meets but exceeds our requirements. Truly professional and reliable.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6527ac08-cf2a-45e9-877d-9cdc4160d7a4.png",
      rating: 5,
      project: "Custom Web Application"
    },
    {
      name: "Lisa Wang",
      position: "Brand Manager, FashionForward",
      company: "FashionForward",
      content: "CreativeAI completely transformed our brand identity with a fresh, modern design that resonates perfectly with our target audience. The new branding has helped us stand out in a competitive market and has been incredibly well-received by our customers.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/90aa6f82-092c-4dfe-a1ad-697d55603872.png",
      rating: 5,
      project: "Brand Identity Design"
    },
    {
      name: "James Miller",
      position: "Operations Manager, ServicePro",
      company: "ServicePro",
      content: "The mobile app developed by CreativeAI has streamlined our business operations significantly. The intuitive design and robust functionality have improved our team's productivity by 40%. Their post-launch support and continuous improvements are outstanding.",
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3aefc99a-ffc0-4cd5-a15b-8721c23d3849.png",
      rating: 5,
      project: "Mobile App Development"
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24/7", label: "Support Available" }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Client Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            working with CreativeAI and the results we've delivered together.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      {/* Rating Stars */}
                      <div className="flex justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-gray-700 leading-relaxed mb-6 text-center italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex flex-col items-center">
                        <img
                          src={testimonial.avatar}
                          alt={`${testimonial.name} - ${testimonial.position}`}
                          className="w-16 h-16 rounded-full mb-4 shadow-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/44d0b04f-7337-47ab-8cda-e62f8be359b6.png}`;
                          }}
                        />
                        <div className="text-center">
                          <div className="font-bold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.position}</div>
                          <div className="text-xs text-purple-600 font-medium">{testimonial.company}</div>
                        </div>
                      </div>

                      {/* Project Badge */}
                      <div className="mt-4 text-center">
                        <Badge variant="secondary" className="text-xs px-3 py-1">
                          {testimonial.project}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white shadow-lg hover:shadow-xl" />
            <CarouselNext className="right-0 bg-white shadow-lg hover:shadow-xl" />
          </Carousel>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Join hundreds of satisfied clients who have 
              transformed their businesses with our digital solutions.
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

export default Testimonials