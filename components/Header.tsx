import Link from 'next/link'
import { Briefcase } from 'lucide-react'

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md py-6">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-indigo-600 flex items-center">
          <Briefcase className="mr-2 h-8 w-8" />
          Career Guide
        </Link>
        <ul className="flex space-x-8">
          <li><a onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-indigo-600 transition-colors text-lg cursor-pointer">Home</a></li>
          <li><a onClick={() => scrollToSection('quiz')} className="text-gray-600 hover:text-indigo-600 transition-colors text-lg cursor-pointer">Quiz</a></li>
          <li><a onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-indigo-600 transition-colors text-lg cursor-pointer">Testimonials</a></li>
          <li><a onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600 transition-colors text-lg cursor-pointer">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}