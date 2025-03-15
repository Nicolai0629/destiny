
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const EnhancedFAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "What types of services do you offer?",
      answer:
        "We offer a comprehensive range of outsourcing services including IT services, customer support, back office support, data entry, digital marketing, content services, and virtual assistance. Our solutions are tailored to meet the specific needs of your business.",
      category: "Services",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We implement industry-standard security protocols, encryption, and regular audits to ensure your data remains secure and confidential. Our team follows strict data protection policies, and we are compliant with relevant regulations to safeguard all client information.",
      category: "Security",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing is flexible and tailored to your needs. We offer both project-based and time-based pricing models. We work with each client to develop a custom pricing structure that aligns with their budget and business objectives.",
      category: "Pricing",
    },
    {
      question: "How quickly can you scale our team?",
      answer:
        "We can typically scale your team within 2-4 weeks, depending on the skill requirements and project complexity. Our large talent pool allows us to quickly identify and onboard qualified professionals to meet your needs as your business grows.",
      category: "Operations",
    },
    {
      question: "What quality assurance measures do you have in place?",
      answer:
        "We have a robust quality management system that includes regular performance monitoring, client feedback integration, and continuous improvement processes. Our dedicated QA team ensures all deliverables meet our high standards before reaching our clients.",
      category: "Quality",
    },
    {
      question: "How do you handle time zone differences?",
      answer:
        "Our teams operate across multiple time zones to provide seamless support. We offer flexible scheduling options, including overlapping hours with your team, and 24/7 support for critical services to ensure effective collaboration regardless of geographical location.",
      category: "Operations",
    },
    {
      question: "What is your employee retention rate?",
      answer:
        "We maintain a high employee retention rate of over 90% through competitive compensation, professional development opportunities, and a positive work culture. This ensures consistency in your outsourced team and minimizes disruptions to your projects.",
      category: "Team",
    },
    {
      question: "Can you provide references from similar projects?",
      answer:
        "Yes, we can provide references from clients in your industry who have used similar services. We're proud of our track record and happy to connect you with existing clients who can share their experiences working with OutSource Pro.",
      category: "General",
    },
  ];

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = searchQuery === "" || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-[1312px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-xl mx-auto mb-8 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <Search size={18} />
          </div>
          <Input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-3 border-gray-300 focus:border-indigo-500"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
              {filteredFAQs.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-solid rounded-[20px] bg-white overflow-hidden shadow-sm hover:shadow transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 text-gray-900 hover:no-underline font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No results found for "{searchQuery}". Please try another search term.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
