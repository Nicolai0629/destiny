import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Pricing } from "@/components/sections/Pricing";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CtaSection } from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <PageLayout withAnimation={false}>
      <Hero />
      
      {/* Stats Section */}
      <SectionContainer className="py-12 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-4xl font-bold text-indigo-600 mb-2">500+</p>
            <p className="text-gray-700">Clients Worldwide</p>
          </div>
          <div className="p-4 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-4xl font-bold text-indigo-600 mb-2">50+</p>
            <p className="text-gray-700">Countries Served</p>
          </div>
          <div className="p-4 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-4xl font-bold text-indigo-600 mb-2">1000+</p>
            <p className="text-gray-700">Team Members</p>
          </div>
          <div className="p-4 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-4xl font-bold text-indigo-600 mb-2">24/7</p>
            <p className="text-gray-700">Support Available</p>
          </div>
        </div>
      </SectionContainer>
      
      {/* Services Section */}
      <Services />
      
      {/* How It Works Section */}
      <SectionContainer 
        title="How It Works" 
        subtitle="Our streamlined process makes outsourcing with us easy and efficient"
        bgColor="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="relative p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">1</div>
            <h3 className="text-xl font-bold mb-3">Consultation</h3>
            <p className="text-gray-600">We begin with a thorough consultation to understand your specific business needs and challenges.</p>
          </div>
          
          <div className="relative p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">2</div>
            <h3 className="text-xl font-bold mb-3">Customized Solution</h3>
            <p className="text-gray-600">Our experts design a tailored outsourcing solution that aligns perfectly with your goals and budget.</p>
          </div>
          
          <div className="relative p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">3</div>
            <h3 className="text-xl font-bold mb-3">Implementation</h3>
            <p className="text-gray-600">We seamlessly implement the solution with minimal disruption to your existing operations.</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button 
              variant="outline" 
              className="group border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </SectionContainer>
      
      <WhyUs />
      
      {/* Results Section */}
      <SectionContainer 
        title="Real Results" 
        subtitle="See the impact our outsourcing solutions have had for businesses like yours"
        bgColor="bg-gradient-to-r from-indigo-50 to-blue-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold text-indigo-600 mb-2">40%</h3>
            <p className="text-lg font-medium mb-3">Cost Reduction</p>
            <p className="text-gray-600">Our clients typically see a 40% reduction in operational costs after implementing our solutions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold text-indigo-600 mb-2">3x</h3>
            <p className="text-lg font-medium mb-3">Productivity Increase</p>
            <p className="text-gray-600">Teams experience up to 3x productivity improvement through our streamlined processes.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold text-indigo-600 mb-2">99.9%</h3>
            <p className="text-lg font-medium mb-3">Service Reliability</p>
            <p className="text-gray-600">We maintain a 99.9% service reliability rate, ensuring consistent quality for your business.</p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
          <h3 className="text-xl font-bold mb-4">Key Benefits Our Clients Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <p>Significant reduction in operational expenses</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <p>Access to specialized talent and expertise</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <p>Increased focus on core business activities</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <p>Enhanced scalability for business growth</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <p>Improved service quality and customer satisfaction</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <p>24/7 operations without additional overhead</p>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      <Testimonials />
      
      <Pricing />
      
      <BlogPreview />
      
      {/* CTA Section - New section to replace FAQ and Contact */}
      <CtaSection />
    </PageLayout>
  );
};

export default Index;
