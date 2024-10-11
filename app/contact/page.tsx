'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Toaster, toast } from 'react-hot-toast'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleConsultationRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase
        .from('Consultation Requests')
        .insert([{ name, email, phone, message }])
      
      if (error) throw error
      
      toast.success('Consultation request submitted successfully!')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (error) {
      console.error('Error storing consultation request:', error)
      toast.error('Failed to submit consultation request. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-100">
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
      {/* use for blue clour on header  <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="text-3xl font-bold">Career Guide</Link>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-indigo-200 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-indigo-200 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-200 transition-colors">Contact Us</Link></li>
          </ul>
        </nav>
      </header> */}

      <main className="flex-grow container mx-auto py-12 px-4">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="mt-6">
            <form onSubmit={handleConsultationRequest} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-medium">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-medium">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-lg font-medium">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full min-h-[100px]"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                {loading ? 'Submitting...' : 'Submit Consultation Request'}
              </Button>
            </form>
          </CardContent>
        </Card>
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
              <li><Link href="/" className="hover:text-indigo-200 transition-colors">Home</Link></li>
  <li><Link href="/about" className="hover:text-indigo-200 transition-colors">About</Link></li>
  <li><Link href="/contact" className="hover:text-indigo-200 transition-colors">Contact Us</Link></li>
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