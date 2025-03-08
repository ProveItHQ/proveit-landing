import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "ProveIt completely transformed our hiring process. We're now able to identify top talent based on their actual skills rather than just their interview performance.",
      name: "Sarah Johnson",
      title: "Head of Recruitment, TechCorp",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a developer, I appreciate being evaluated on my actual coding abilities. ProveIt gave me a chance to showcase my skills in a realistic environment.",
      name: "Michael Chen",
      title: "Senior Developer, hired through ProveIt",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The detailed analytics and project-based approach have cut our bad hires by 60%. ProveIt is now an essential part of our recruitment strategy.",
      name: "Jessica Williams",
      title: "CTO, StartupX",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  const partners = ["TechCorp", "InnovateLabs", "StartupX", "GlobalSoft", "NextGen Solutions", "FutureTech"]

  return (
    <section className="bg-gray-50">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our early adopters have to say about the ProveIt experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Our Early Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="text-gray-400 font-bold text-xl">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

