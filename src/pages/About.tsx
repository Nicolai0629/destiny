
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Globe, Award, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <PageLayout>
      <PageHero
        title="About OutSource Pro"
        subtitle="Empowering businesses through strategic outsourcing solutions since 2010"
      />
      
      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              OutSource Pro was founded in 2010 with a vision to transform how businesses approach outsourcing. We recognized that the traditional outsourcing model often failed to deliver the quality and results that modern businesses need.
            </p>
            <p className="text-gray-600 mb-6">
              Our founders, with over 25 years of combined experience in business operations and technology, set out to create a company that would bridge the gap between cost efficiency and exceptional quality.
            </p>
            <p className="text-gray-600">
              Today, we're proud to have helped hundreds of businesses across more than 50 countries optimize their operations, reduce costs, and focus on their core competencies.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-lg w-full h-[260px] lg:h-[400px] shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Team collaborating around laptops" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Core Values Section */}
      <SectionContainer
        title="Our Core Values"
        subtitle="The principles that guide everything we do"
        bgColor="bg-gradient-to-r from-indigo-50 to-blue-50"
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Excellence Card */}
          <motion.div variants={cardVariant}>
            <Card className="bg-white p-8 rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md h-full">
              <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering exceptional quality in everything we do, from our services to our client relationships.
              </p>
            </Card>
          </motion.div>

          {/* Integrity Card */}
          <motion.div variants={cardVariant}>
            <Card className="bg-white p-8 rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md h-full">
              <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards, building trust through transparency, honesty, and accountability.
              </p>
            </Card>
          </motion.div>

          {/* Innovation Card */}
          <motion.div variants={cardVariant}>
            <Card className="bg-white p-8 rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-md h-full">
              <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to provide cutting-edge solutions to our clients.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Our Team Section */}
      <SectionContainer
        title="Our Leadership Team"
        subtitle="Meet the experts behind OutSource Pro's success"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="relative rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="James Wilson" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">James Wilson</h3>
            <p className="text-indigo-600 mb-2">CEO & Co-Founder</p>
            <p className="text-gray-600 text-sm">
              20+ years of experience in business operations and strategic planning.
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="relative rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Sarah Chen" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
            <p className="text-indigo-600 mb-2">CTO & Co-Founder</p>
            <p className="text-gray-600 text-sm">
              Leading tech innovation with 15+ years in software development and IT services.
            </p>
          </div>
          
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="relative rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Michael Rodriguez" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
            <p className="text-indigo-600 mb-2">COO</p>
            <p className="text-gray-600 text-sm">
              Optimizing operations with extensive experience in process improvement.
            </p>
          </div>
          
          {/* Team Member 4 */}
          <div className="text-center">
            <div className="relative rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Emily Patel" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Emily Patel</h3>
            <p className="text-indigo-600 mb-2">Head of Client Success</p>
            <p className="text-gray-600 text-sm">
              Ensuring exceptional client experiences and long-term partnerships.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Global Presence Section */}
      <SectionContainer
        title="Our Global Presence"
        subtitle="Serving clients worldwide with local expertise"
        bgColor="bg-gradient-to-r from-indigo-50 to-blue-50"
      >
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Clients */}
          <motion.div 
            variants={cardVariant}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-4xl font-bold text-indigo-600 mb-2">500+</p>
            <p className="text-gray-600">Clients Worldwide</p>
          </motion.div>
          
          {/* Countries */}
          <motion.div 
            variants={cardVariant}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-4xl font-bold text-indigo-600 mb-2">50+</p>
            <p className="text-gray-600">Countries Served</p>
          </motion.div>
          
          {/* Team Members */}
          <motion.div 
            variants={cardVariant}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-4xl font-bold text-indigo-600 mb-2">1000+</p>
            <p className="text-gray-600">Team Members</p>
          </motion.div>
          
          {/* Support */}
          <motion.div 
            variants={cardVariant}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-4xl font-bold text-indigo-600 mb-2">24/7</p>
            <p className="text-gray-600">Support Available</p>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer bgColor="bg-indigo-600" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-indigo-100">
            Partner with OutSource Pro and discover how our outsourcing solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Schedule a Consultation
            </CTAButton>
            <CTAButton href="/services" variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-indigo-700">
              Explore Our Services
            </CTAButton>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default About;
