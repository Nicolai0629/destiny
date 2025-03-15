
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Pricing as PricingSection } from "@/components/sections/Pricing";
import { EnhancedFAQ } from "@/components/sections/EnhancedFAQ";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-indigo-50 py-20">
          <div className="max-w-[1312px] mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transparent Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs with no hidden fees
            </p>
          </div>
        </section>
        
        <PricingSection />
        
        <section className="py-16 bg-white">
          <div className="max-w-[1312px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Custom Enterprise Solutions
            </h2>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a customized solution?</h3>
                <p className="text-gray-600">
                  We offer tailored packages for businesses with specific requirements. 
                  Our team will work with you to create a solution that perfectly matches your needs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="mailto:contact@outsourcepro.com" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                >
                  Contact Sales
                </a>
                
                <a 
                  href="tel:+1(555)123-4567" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <EnhancedFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
