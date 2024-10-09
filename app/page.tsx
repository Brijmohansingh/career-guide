'use client'

import { useState } from 'react'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import axios from 'axios'

export default function CareerGuide() {
  const [subject, setSubject] = useState('')
  const [grade, setGrade] = useState('')
  const [careerInfo, setCareerInfo] = useState('')
  const [loading, setLoading] = useState(false)

  const subjects = ['Chemistry', 'Physics', 'Mathematics', 'Biology', 'Computer Science']
  const grades = ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F']

  const fetchCareerInfo = async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/career-info', { subject, grade })
      setCareerInfo(response.data.careerInfo)
    } catch (error) {
      console.error('Error fetching career info:', error)
      setCareerInfo('Failed to fetch career information. Please try again later.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md mx-auto">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-2xl font-bold">Indian Student Career Guide</CardTitle>
        </CardHeader>
        <CardContent className="mt-5">
          <div className="space-y-4">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Select Your Subject
              </label>
              <Select
                id="subject"
                value={subject}
                onValueChange={setSubject}
                options={subjects.map(s => ({ value: s, label: s }))}
              />
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                Select Your Grade
              </label>
              <Select
                id="grade"
                value={grade}
                onValueChange={setGrade}
                options={grades.map(g => ({ value: g, label: g }))}
              />
            </div>
            <Button onClick={fetchCareerInfo} disabled={loading} className="w-full">
              {loading ? 'Loading...' : 'Get Career Information'}
            </Button>
            {careerInfo && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-medium text-gray-900">Career Information:</h3>
                <p className="mt-2 text-sm text-gray-500">{careerInfo}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}