
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What types of services do you offer?",
    answer:
      "We offer a comprehensive range of outsourcing services including IT services, customer support, back office support, data entry, digital marketing, content services, and virtual assistance. Our solutions are tailored to meet the specific needs of your business.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We implement industry-standard security protocols, encryption, and regular audits to ensure your data remains secure and confidential. Our team follows strict data protection policies, and we are compliant with relevant regulations to safeguard all client information.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is flexible and tailored to your needs. We offer both project-based and time-based pricing models. We work with each client to develop a custom pricing structure that aligns with their budget and business objectives.",
  },
  {
    question: "How quickly can you scale our team?",
    answer:
      "We can typically scale your team within 2-4 weeks, depending on the skill requirements and project complexity. Our large talent pool allows us to quickly identify and onboard qualified professionals to meet your needs as your business grows.",
  },
  {
    question: "What quality assurance measures do you have in place?",
    answer:
      "We have a robust quality management system that includes regular performance monitoring, client feedback integration, and continuous improvement processes. Our dedicated QA team ensures all deliverables meet our high standards before reaching our clients.",
  },
  {
    question: "How do you handle time zone differences?",
    answer:
      "Our teams operate across multiple time zones to provide seamless support. We offer flexible scheduling options, including overlapping hours with your team, and 24/7 support for critical services to ensure effective collaboration regardless of geographical location.",
  },
  {
    question: "What is your employee retention rate?",
    answer:
      "We maintain a high employee retention rate of over 90% through competitive compensation, professional development opportunities, and a positive work culture. This ensures consistency in your outsourced team and minimizes disruptions to your projects.",
  },
  {
    question: "Can you provide references from similar projects?",
    answer:
      "Yes, we can provide references from clients in your industry who have used similar services. We're proud of our track record and happy to connect you with existing clients who can share their experiences working with OutSource Pro.",
  },
];

const FAQsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-[#f5f7ff] flex-grow">
        <section className="py-16">
          <div className="max-w-[1312px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Frequently Asked Questions
            </h1>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-solid rounded-[20px] bg-white overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-gray-900 bg-[#EFEFEF] hover:no-underline font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;
