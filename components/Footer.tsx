import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
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
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: info@careerguide.com</p>
            <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2023 Career Guide. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link> | 
            <Link href="/terms-of-service" className="hover:text-white ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}