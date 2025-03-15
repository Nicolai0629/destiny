
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  title: string;
  image?: string;
  testimonial: string;
}

const TestimonialCard = ({ name, title, image, testimonial }: TestimonialProps) => (
  <Card className="shadow-md h-full">
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-gray-200">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial}</p>
    </CardContent>
  </Card>
);

const TestimonialsPage = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      testimonial: "OutSource Pro has transformed our business operations. Their dedicated team delivered exceptional results, reducing our operational costs while maintaining the highest quality standards."
    },
    {
      name: "Michael Chen",
      title: "Operations Director, GlobalTech",
      testimonial: "The level of expertise and professionalism from OutSource Pro is unmatched. They've become an integral part of our success story."
    },
    {
      name: "Emily Rodriguez",
      title: "CTO, Innovation Labs",
      testimonial: "Working with OutSource Pro has been a game-changer. Their IT services and support have helped us scale efficiently."
    },
    {
      name: "David Thompson",
      title: "Founder, DataFlow Systems",
      testimonial: "The customer support team is exceptional. They're always available and go above and beyond to ensure our satisfaction."
    },
    {
      name: "Lisa Anderson",
      title: "VP of Operations, CloudNet",
      testimonial: "OutSource Pro delivers consistent quality and reliability. They've helped us achieve our business objectives ahead of schedule."
    },
    {
      name: "James Wilson",
      title: "Director, Digital Solutions",
      testimonial: "Their expertise in back office support has streamlined our operations significantly. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-[#f5f7ff]">
        <section className="py-16">
          <div className="max-w-[1312px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              What Our Clients Say
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
