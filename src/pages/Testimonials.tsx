
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  name: string;
  title: string;
  image?: string;
  testimonial: string;
  rating: number;
  featured?: boolean;
  category: string;
}

const TestimonialCard = ({ name, title, image, testimonial, rating, featured }: TestimonialProps) => (
  <Card className={cn(
    "h-full transition-all duration-300 hover:shadow-lg",
    featured ? "shadow-md border-indigo-200" : "shadow-sm"
  )}>
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-12 w-12 border-2 border-indigo-100">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-indigo-100 text-indigo-800">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )}
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">{testimonial}</p>
    </CardContent>
  </Card>
);

const TestimonialsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      testimonial: "OutSource Pro has transformed our business operations. Their dedicated team delivered exceptional results, reducing our operational costs while maintaining the highest quality standards.",
      rating: 5,
      featured: true,
      category: "IT Services"
    },
    {
      name: "Michael Chen",
      title: "Operations Director, GlobalTech",
      testimonial: "The level of expertise and professionalism from OutSource Pro is unmatched. They've become an integral part of our success story.",
      rating: 5,
      category: "Back Office"
    },
    {
      name: "Emily Rodriguez",
      title: "CTO, Innovation Labs",
      testimonial: "Working with OutSource Pro has been a game-changer. Their IT services and support have helped us scale efficiently.",
      rating: 4,
      category: "IT Services"
    },
    {
      name: "David Thompson",
      title: "Founder, DataFlow Systems",
      testimonial: "The customer support team is exceptional. They're always available and go above and beyond to ensure our satisfaction.",
      rating: 5,
      featured: true,
      category: "Customer Support"
    },
    {
      name: "Lisa Anderson",
      title: "VP of Operations, CloudNet",
      testimonial: "OutSource Pro delivers consistent quality and reliability. They've helped us achieve our business objectives ahead of schedule.",
      rating: 4,
      category: "Back Office"
    },
    {
      name: "James Wilson",
      title: "Director, Digital Solutions",
      testimonial: "Their expertise in back office support has streamlined our operations significantly. Highly recommended!",
      rating: 5,
      category: "Back Office"
    },
    {
      name: "Robert Garcia",
      title: "Marketing Director, Bloom Brands",
      testimonial: "The digital marketing team at OutSource Pro took our online presence to the next level. Our conversion rates have increased by 40%.",
      rating: 5,
      category: "Marketing"
    },
    {
      name: "Susan Lee",
      title: "Customer Experience Manager, RetailPlus",
      testimonial: "Our customers have noticed the improvement in support quality since we partnered with OutSource Pro. Response times are faster and resolution rates higher.",
      rating: 4,
      category: "Customer Support"
    },
    {
      name: "Thomas Wright",
      title: "CEO, Wright Enterprises",
      testimonial: "From day one, the team has been professional, responsive, and truly invested in our success. They feel like an extension of our in-house team.",
      rating: 5,
      featured: true,
      category: "Marketing"
    }
  ];

  const categories = Array.from(new Set(testimonials.map(testimonial => testimonial.category)));
  
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = searchQuery === "" || 
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      testimonial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      testimonial.testimonial.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || testimonial.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredTestimonials = filteredTestimonials.filter(t => t.featured);
  const regularTestimonials = filteredTestimonials.filter(t => !t.featured);

  return (
    <PageLayout>
      <PageHero 
        title="What Our Clients Say" 
        subtitle="Read testimonials from businesses that have transformed with our outsourcing solutions"
        bgColor="bg-gradient-to-r from-indigo-50 to-blue-50"
      />

      <SectionContainer bgColor="bg-white">
        {/* Featured Testimonials */}
        {featuredTestimonials.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-80">
              <Input
                type="text"
                placeholder="Search testimonials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-gray-300"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setActiveCategory(null)}
                variant={activeCategory === null ? "default" : "outline"}
                size="sm"
                className={activeCategory === null ? "bg-indigo-600" : ""}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={activeCategory === category ? "bg-indigo-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials */}
        {regularTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {regularTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No testimonials found</h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any testimonials matching your search criteria.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory(null);
              }}
            >
              Reset filters
            </Button>
          </div>
        )}
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer bgColor="bg-indigo-600" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-lg mb-8 text-indigo-100">
            Experience the same transformation that our clients are raving about. Get started with OutSource Pro today.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-gray-100"
            onClick={() => window.location.href = '/contact'}
          >
            Schedule a Consultation
          </Button>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default TestimonialsPage;
