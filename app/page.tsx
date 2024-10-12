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
import { Sparkles, BookOpen, TrendingUp, Briefcase, ChevronDown, ChevronUp } from 'lucide-react'
import { ProgressIndicator } from '@/components/ProgressIndicator'
import { CareerQuiz } from '@/components/CareerQuiz'
import { Footer } from '@/components/Footer'
import { Testimonials } from '@/components/Testimonials'

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

interface FAQItem {
  question: string;
  answer: string;
}

export default function CareerGuide() {
  const [subject, setSubject] = useState('')
  const [grade, setGrade] = useState('')
  const [marks, setMarks] = useState<number | null>(null)
  const [careerInfo, setCareerInfo] = useState<CareerInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const subjects = ['Chemistry', 'Physics', 'Mathematics', 'Biology', 'Computer Science']
  const grades = Object.keys(gradeToMarks)
  const steps = [
    { title: 'Select Subject', completed: false },
    { title: 'Choose Grade', completed: false },
    { title: 'View Insights', completed: false },
  ]

  const faqItems: FAQItem[] = [
    {
      question: "How does Career Guide help me?",
      answer: "Career Guide provides personalized career recommendations based on your interests, skills, and academic performance. We offer in-depth insights into various career paths, salary expectations, and growth opportunities."
    },
    {
      question: "Is Career Guide free to use?",
      answer: "Yes, our basic services are free. We also offer premium features for a more comprehensive career guidance experience."
    },
    {
      question: "How accurate are the career recommendations?",
      answer: "Our recommendations are based on extensive research and data analysis. However, they should be used as a guide, and we encourage users to explore and research further."
    },
  ]

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
      setCurrentStep(3)
      steps[2].completed = true
    } catch (error) {
      console.error('Error fetching career info:', error)
      toast.error('Failed to fetch career information. Please try again.')
    }
    setLoading(false)
  }

  const handleSubjectChange = (value: string) => {
    setSubject(value)
    setCurrentStep(1)
    steps[0].completed = true
  }

  const handleGradeChange = (value: string) => {
    setGrade(value)
    setCurrentStep(2)
    steps[1].completed = true
  }

  const toggleFAQ = (index: number) => {
    if (openFAQIndex === index) {
      setOpenFAQIndex(null)
    } else {
      setOpenFAQIndex(index)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-100">
      <Toaster position="top-center" />
      <header className="bg-white shadow-md py-6">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-indigo-600 flex items-center">
            <Briefcase className="mr-2 h-8 w-8" />
            Career Guide
          </Link>
          <ul className="flex space-x-8">
            <li><Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors text-lg">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors text-lg">About</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors text-lg">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Discover Your Ideal Career Path</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Unlock your potential and explore exciting career opportunities tailored to your interests and academic performance.</p>
        </motion.div>

        <ProgressIndicator steps={steps} currentStep={currentStep} />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardTitle className="text-2xl font-bold">Explore Your Career Path</CardTitle>
            </CardHeader>
            <CardContent className="mt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-lg font-medium text-gray-700">Select Your Subject</label>
                  <Select onValueChange={handleSubjectChange}>
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
                  <Select onValueChange={handleGradeChange}>
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
                <Button onClick={fetchCareerInfo} disabled={loading || !subject || !grade} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                  {loading ? 'Analyzing...' : 'Get Career Insights'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
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

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Discover Your Career Path</h2>
          <CareerQuiz />
        </div>

        <Testimonials />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="w-full max-w-2xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  {openFAQIndex === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFAQIndex === index && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Get personalized guidance from our expert career counselors and unlock your full potential.</p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book a Free Consultation
          </Button>
        </motion.div>

        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>

      <Footer />
    </div>
  )
}