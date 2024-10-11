'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Lightbulb, Target } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const teamMembers = [
    { name: "Dr. Emily Chen", role: "Career Psychologist ", image: "/emily.png?height=100&width=100" },
    { name: "Brij M Singh", role: "IT Specialist", image: "/brij.png?height=100&width=100" },
    { name: "Jayshree Singh", role: "Head of Software", image: "/jay2.png?height=100&width=100" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-6 px-4">
          <Link href="/" className="text-3xl font-bold text-indigo-600">Career Guide</Link>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Career Guide</h1>
          <p className="text-xl text-gray-600">Empowering students to make informed career decisions and unlock their full potential.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardTitle className="text-xl font-bold flex items-center">
                <Users className="mr-2" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p>To provide personalized career guidance and empower students to make informed decisions about their future.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
              <CardTitle className="text-xl font-bold flex items-center">
                <Lightbulb className="mr-2" /> Our Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p>We combine data-driven insights with expert counseling to offer tailored career advice for each individual.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-red-600 text-white">
              <CardTitle className="text-xl font-bold flex items-center">
                <Target className="mr-2" /> Our Goal
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-4">
              <p>To bridge the gap between education and industry, ensuring students are well-prepared for their chosen careers.</p>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <Image src={member.image} alt={member.name} width={96} height={96} className="w-24 h-24 rounded-full mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Shape Your Future?</h2>
          <p className="text-xl text-gray-600 mb-6">Let our expert team guide you towards a fulfilling career path.</p>
          <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Get Started</Link>
          </Button>
        </motion.div>
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
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
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