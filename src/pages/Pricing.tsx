
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Pricing as PricingSection } from "@/components/sections/Pricing";
import { EnhancedFAQ } from "@/components/sections/EnhancedFAQ";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="Transparent Pricing Plans"
        subtitle="Choose the plan that fits your business needs with no hidden fees"
      />
      
      <PricingSection checkoutPath="/checkout" />
      
      <SectionContainer>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a customized solution?</h3>
            <p className="text-gray-600">
              We offer tailored packages for businesses with specific requirements. 
              Our team will work with you to create a solution that perfectly matches your needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            >
              Contact Sales
            </Link>
            
            <a 
              href="tel:+1(555)123-4567" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </SectionContainer>
      
      <EnhancedFAQ />
    </PageLayout>
  );
};

export default PricingPage;
