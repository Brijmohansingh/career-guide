import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah J.",
    role: "Recent Graduate",
    content: "Career Guide helped me discover my passion for data science. Their personalized advice was invaluable in shaping my career path."
  },
  {
    name: "Michael T.",
    role: "Career Changer",
    content: "Thanks to Career Guide, I successfully transitioned from finance to UX design. Their insights and support made all the difference."
  },
  {
    name: "Emily R.",
    role: "High School Student",
    content: "Career Guide's assessment tools gave me clarity on my strengths and interests. I now have a clear direction for my college applications."
  }
]

export function Testimonials() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}