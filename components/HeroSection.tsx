import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="hero" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Discover Your Ideal Career Path</h1>
          <p className="text-xl text-gray-600 mb-8">Unlock your potential and explore exciting career opportunities tailored to your interests and academic performance.</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Get Started Now!
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/career-exploration.svg" 
            alt="Students exploring career options" 
            width={500} 
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}