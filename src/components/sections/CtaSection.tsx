
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
      <div className="max-w-[1312px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business Operations?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          Partner with OutSource Pro today and experience the benefits of professional outsourcing solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="text-base px-6 py-5 bg-white text-indigo-900 hover:bg-gray-100">
              Contact Sales Team
            </Button>
          </Link>
          <Link to="/services">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-6 py-5 border-white text-white hover:bg-white/10 group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
