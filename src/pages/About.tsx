
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* About Hero Section */}
        <section className="bg-[#f5f7ff] py-16">
          <div className="max-w-[1312px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About OutSource Pro</h1>
            
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="max-w-xl">
                <p className="text-gray-600 mb-6">
                  OutSource Pro is a leading provider of professional outsourcing solutions, helping businesses scale efficiently while maintaining quality. With years of experience and a global network of skilled professionals, we deliver exceptional results across various industries.
                </p>
                <p className="text-gray-600">
                  Our mission is to empower businesses by providing access to top-tier talent and innovative solutions that drive growth and success.
                </p>
              </div>
              
              <div className="flex-1">
                <div className="bg-gray-200 rounded-lg w-full h-[260px] lg:h-[230px] shadow-md"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Cards Section */}
        <section className="py-16 bg-[#f5f7ff]">
          <div className="max-w-[1312px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vision Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in outsourcing solutions, known for innovation, reliability, and exceptional service delivery.
                </p>
              </div>

              {/* Values Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-indigo-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Excellence, integrity, innovation, and customer-centricity guide everything we do at OutSource Pro.
                </p>
              </div>

              {/* Impact Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
                <p className="text-gray-600">
                  We've helped hundreds of businesses reduce costs and improve efficiency through our tailored solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1312px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Global Presence</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {/* Clients */}
              <div>
                <p className="text-4xl font-bold text-indigo-600 mb-2">500+</p>
                <p className="text-gray-600">Clients Worldwide</p>
              </div>
              
              {/* Countries */}
              <div>
                <p className="text-4xl font-bold text-indigo-600 mb-2">50+</p>
                <p className="text-gray-600">Countries Served</p>
              </div>
              
              {/* Team Members */}
              <div>
                <p className="text-4xl font-bold text-indigo-600 mb-2">1000+</p>
                <p className="text-gray-600">Team Members</p>
              </div>
              
              {/* Support */}
              <div>
                <p className="text-4xl font-bold text-indigo-600 mb-2">24/7</p>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
