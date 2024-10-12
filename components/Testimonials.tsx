import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah J.",
    role: "Recent Graduate",
    content: "Career Guide helped me discover my passion for data science. Their personalized advice was invaluable in shaping my career path.",
    image: "/placeholder-avatar-1.jpg"
  },
  {
    name: "Michael T.",
    role: "Career Changer",
    content: "Thanks to Career Guide, I successfully transitioned from finance to UX design. Their insights and support made all the difference.",
    image: "/placeholder-avatar-2.jpg"
  },
  {
    name: "Emily R.",
    role: "High School Student",
    content: "Career Guide's assessment tools gave me clarity on my strengths and interests. I now have a clear direction for my college applications.",
    image: "/placeholder-avatar-3.jpg"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <p className="text-gray-600 mb-4 flex-grow">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
                <div className="flex items-center mt-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={50} 
                    height={50} 
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}