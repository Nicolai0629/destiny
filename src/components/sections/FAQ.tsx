import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What types of services do you offer?",
    answer:
      "We offer a comprehensive range of outsourcing services including IT services, customer support, back office support, data entry, and more.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We implement industry-standard security protocols, encryption, and regular audits to ensure your data remains secure and confidential.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is flexible and tailored to your needs. We offer both project-based and time-based pricing models.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="box-border bg-white pt-6 pb-24">
      <h2 className="box-border text-3xl font-bold text-gray-900 text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="box-border max-w-screen-md flex flex-col gap-4 mx-auto my-0 px-6 py-0">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="box-border border border-solid rounded-[20px]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="box-border w-full flex justify-between items-center text-[12.3px] text-gray-900 bg-[#EFEFEF] px-[26px] py-[18px] rounded-[20px] border-2 border-solid border-black"
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <svg
                className={cn(
                  "w-5 h-5 transition-transform",
                  openIndex === index && "transform rotate-180",
                )}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7669 7.92676L10.9336 13.7601L5.10022 7.92676"
                  stroke="#6B7280"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-6">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
