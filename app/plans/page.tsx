'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: ['30-minute consultation', 'Career path overview', 'Email support'],
  },
  {
    name: 'Standard',
    price: 49,
    features: ['45-minute consultation', 'Detailed career roadmap', 'Email and chat support'],
  },
  {
    name: 'Premium',
    price: 79,
    features: ['60-minute consultation', 'Comprehensive career strategy', '24/7 priority support'],
  },
]

export default function PlansPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-100">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="text-3xl font-bold">Career Guide</Link>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-indigo-200 transition-colors">Home</Link></li>
            <li><Link href="/plans" className="hover:text-indigo-200 transition-colors">Plans</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-200 transition-colors">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col shadow-xl">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <div>
                  <p className="text-3xl font-bold mb-4">${plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                  <Link href="/book-now">Choose Plan</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">We help students make informed decisions about their career paths, providing expert guidance and insights.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/plans" className="text-gray-300 hover:text-white transition-colors">Plans</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300">Email: info@careerguide.com</p>
              <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            © 2023 Career Guide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}