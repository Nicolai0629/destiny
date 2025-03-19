
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
      <div className="max-w-[1312px] mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business Operations?
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-200">
          Partner with OutSource Pro today and experience the benefits of professional outsourcing solutions tailored to your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="text-base px-6 py-6 bg-white text-indigo-900 hover:bg-gray-100">
              Contact Sales Team
            </Button>
          </Link>
          <Link to="/services">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-6 py-6 border-white text-white hover:bg-white/10 group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/2053c657-4918-41fe-8fc3-3207c5440755.png" 
              alt="Trust Badge" 
              className="h-16 mb-3 opacity-90"
            />
            <p className="text-sm text-gray-300">Trusted Service</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-3">24/7</div>
            <p className="text-sm text-gray-300">Customer Support</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-3">100%</div>
            <p className="text-sm text-gray-300">Satisfaction Guarantee</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-3">10+</div>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};
