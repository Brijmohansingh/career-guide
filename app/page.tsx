'use client'

import { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios'
import Link from 'next/link'
import { ConsultationModal } from '@/components/ConsultationModal'
import { motion } from 'framer-motion'
import { Sparkles, BookOpen, TrendingUp } from 'lucide-react'

interface CareerInfo {
  entryLevelJobs: string[];
  salaryRanges: string[];
  growthOpportunities: string[];
}

const gradeToMarks: { [key: string]: number } = {
  'A+': 95, 'A': 90, 'A-': 85,
  'B+': 80, 'B': 75, 'B-': 70,
  'C+': 65, 'C': 60, 'C-': 55,
  'D+': 50, 'D': 45, 'D-': 40,
  'F': 35
}

export default function CareerGuide() {
  const [subject, setSubject] = useState('')
  const [grade, setGrade] = useState('')
  const [marks, setMarks] = useState<number | null>(null)
  const [careerInfo, setCareerInfo] = useState<CareerInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const subjects = ['Chemistry', 'Physics', 'Mathematics', 'Biology', 'Computer Science']
  const grades = Object.keys(gradeToMarks)

  useEffect(() => {
    if (grade) {
      setMarks(gradeToMarks[grade])
    } else {
      setMarks(null)
    }
  }, [grade])

  const fetchCareerInfo = async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/career-info', { subject, grade })
      setCareerInfo(response.data.careerInfo)
    } catch (error) {
      console.error('Error fetching career info:', error)
      toast.error('Failed to fetch career information. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-100">
      <Toaster position="top-center" />
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Discover Your Ideal Career Path</h1>
          <p className="text-xl text-gray-600">Unlock your potential and explore exciting career opportunities tailored to your interests and academic performance.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="md:col-span-1 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardTitle className="text-2xl font-bold">Explore Your Career Path</CardTitle>
            </CardHeader>
            <CardContent className="mt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-lg font-medium text-gray-700">Select Your Subject</label>
                  <Select onValueChange={setSubject}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="grade" className="text-lg font-medium text-gray-700">Select Your Grade</label>
                  <Select onValueChange={setGrade}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose your grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {grades.map((g) => (
                        <SelectItem key={g} value={g}>{g}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {marks !== null && (
                  <div className="bg-indigo-100 border border-indigo-300 rounded-md p-3 mt-2">
                    <p className="text-sm font-medium text-indigo-800">Equivalent marks: {marks}</p>
                  </div>
                )}
                <Button onClick={fetchCareerInfo} disabled={loading} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                  {loading ? 'Analyzing...' : 'Get Career Insights'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="md:col-span-1 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
              <CardTitle className="text-2xl font-bold">Career Insights</CardTitle>
            </CardHeader>
            <CardContent className="mt-6">
              {careerInfo ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-purple-700">Career Roadmap for {subject} (Grade: {grade})</h3>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-indigo-600 flex items-center"><Sparkles className="mr-2" /> Entry-Level Job Roles:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {careerInfo.entryLevelJobs.map((job, index) => (
                        <li key={index}>{job}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-indigo-600 flex items-center"><TrendingUp className="mr-2" /> Expected Salary Ranges (Entry-Level):</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {careerInfo.salaryRanges.map((salary, index) => (
                        <li key={index}>{salary}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-indigo-600 flex items-center"><BookOpen className="mr-2" /> Growth Opportunities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {careerInfo.growthOpportunities.map((opportunity, index) => (
                        <li key={index}>{opportunity}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <p className="text-gray-500 italic">Select a subject and grade to see career insights.</p>
              )}
            </CardContent>
          </Card>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-gray-600 mb-6">Get personalized guidance from our expert career counselors and unlock your full potential.</p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book a Free Consultation
          </Button>
        </motion.div>

        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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