
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/ui/ServiceCard";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: `<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4336 34.637L18.9336 40.637L16.9336 42.637H32.9336L30.9336 40.637L29.4336 34.637M6.93356 26.637H42.9336M10.9336 34.637H38.9336C39.9944 34.637 41.0118 34.2155 41.762 33.4654C42.5121 32.7152 42.9336 31.6978 42.9336 30.637V10.637C42.9336 9.5761 42.5121 8.55868 41.762 7.80854C41.0118 7.05839 39.9944 6.63696 38.9336 6.63696H10.9336C9.8727 6.63696 8.85528 7.05839 8.10514 7.80854C7.35499 8.55868 6.93356 9.5761 6.93356 10.637V30.637C6.93356 31.6978 7.35499 32.7152 8.10514 33.4654C8.85528 34.2155 9.8727 34.637 10.9336 34.637Z" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    title: "IT Services",
    description:
      "Custom software development, web applications, mobile apps, cloud solutions, and IT infrastructure management.",
  },
  {
    icon: `<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.2635 40.637H44.2635V36.637C44.2635 35.39 43.8749 34.1741 43.1518 33.1582C42.4288 32.1423 41.4072 31.3769 40.229 30.9685C39.0509 30.56 37.7748 30.5287 36.5781 30.879C35.3813 31.2293 34.3235 31.9437 33.5515 32.923M34.2635 40.637H14.2635M34.2635 40.637V36.637C34.2635 35.325 34.0115 34.071 33.5515 32.923M33.5515 32.923C32.8088 31.0669 31.5271 29.4759 29.8715 28.3552C28.216 27.2345 26.2627 26.6356 24.2635 26.6356C22.2644 26.6356 20.3111 27.2345 18.6556 28.3552C17 29.4759 15.7183 31.0669 14.9755 32.923M14.2635 40.637H4.26355V36.637C4.26364 35.39 4.65222 34.1741 5.37527 33.1582C6.09832 32.1423 7.11992 31.3769 8.29805 30.9685C9.47618 30.56 10.7523 30.5287 11.949 30.879C13.1457 31.2293 14.2036 31.9437 14.9755 32.923M14.2635 40.637V36.637C14.2635 35.325 14.5155 34.071 14.9755 32.923M30.2635 14.637C30.2635 16.2283 29.6314 17.7544 28.5062 18.8796C27.381 20.0048 25.8548 20.637 24.2635 20.637C22.6723 20.637 21.1461 20.0048 20.0209 18.8796C18.8957 17.7544 18.2635 16.2283 18.2635 14.637C18.2635 13.0457 18.8957 11.5195 20.0209 10.3943C21.1461 9.2691 22.6723 8.63696 24.2635 8.63696C25.8548 8.63696 27.381 9.2691 28.5062 10.3943C29.6314 11.5195 30.2635 13.0457 30.2635 14.637ZM42.2635 20.637C42.2635 21.6978 41.8421 22.7152 41.092 23.4654C40.3418 24.2155 39.3244 24.637 38.2635 24.637C37.2027 24.637 36.1853 24.2155 35.4351 23.4654C34.685 22.7152 34.2635 21.6978 34.2635 20.637C34.2635 19.5761 34.685 18.5587 35.4351 17.8085C36.1853 17.0584 37.2027 16.637 38.2635 16.637C39.3244 16.637 40.3418 17.0584 41.092 17.8085C41.8421 18.5587 42.2635 19.5761 42.2635 20.637ZM14.2635 20.637C14.2635 21.6978 13.8421 22.7152 13.092 23.4654C12.3418 24.2155 11.3244 24.637 10.2635 24.637C9.20268 24.637 8.18527 24.2155 7.43512 23.4654C6.68498 22.7152 6.26355 21.6978 6.26355 20.637C6.26355 19.5761 6.68498 18.5587 7.43512 17.8085C8.18527 17.0584 9.20268 16.637 10.2635 16.637C11.3244 16.637 12.3418 17.0584 13.092 17.8085C13.8421 18.5587 14.2635 19.5761 14.2635 20.637Z" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    title: "Customer Support",
    description:
      "24/7 customer service, technical support, help desk solutions, and multi-channel support services.",
  },
  {
    icon: `<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5935 38.637V26.637C18.5935 25.5761 18.1721 24.5587 17.4219 23.8085C16.6718 23.0584 15.6544 22.637 14.5935 22.637H10.5935C9.53264 22.637 8.51522 23.0584 7.76508 23.8085C7.01493 24.5587 6.59351 25.5761 6.59351 26.637V38.637C6.59351 39.6978 7.01493 40.7152 7.76508 41.4654C8.51522 42.2155 9.53264 42.637 10.5935 42.637H14.5935C15.6544 42.637 16.6718 42.2155 17.4219 41.4654C18.1721 40.7152 18.5935 39.6978 18.5935 38.637ZM18.5935 38.637V18.637C18.5935 17.5761 19.0149 16.5587 19.7651 15.8085C20.5152 15.0584 21.5326 14.637 22.5935 14.637H26.5935C27.6544 14.637 28.6718 15.0584 29.4219 15.8085C30.1721 16.5587 30.5935 17.5761 30.5935 18.637V38.637M18.5935 38.637C18.5935 39.6978 19.0149 40.7152 19.7651 41.4654C20.5152 42.2155 21.5326 42.637 22.5935 42.637H26.5935C27.6544 42.637 28.6718 42.2155 29.4219 41.4654C30.1721 40.7152 30.5935 39.6978 30.5935 38.637M30.5935 38.637V10.637C30.5935 9.5761 31.0149 8.55868 31.7651 7.80854C32.5152 7.05839 33.5326 6.63696 34.5935 6.63696H38.5935C39.6544 6.63696 40.6718 7.05839 41.4219 7.80854C42.1721 8.55868 42.5935 9.5761 42.5935 10.637V38.637C42.5935 39.6978 42.1721 40.7152 41.4219 41.4654C40.6718 42.2155 39.6544 42.637 38.5935 42.637H34.5935C33.5326 42.637 32.5152 42.2155 31.7651 41.4654C31.0149 40.7152 30.5935 39.6978 30.5935 38.637Z" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    title: "Back Office Support",
    description:
      "Data entry, accounting, HR services, administrative support, and document processing.",
  },
  {
    icon: `<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.26355 12.637H18.2635V24.637H6.26355V12.637Z" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M30.2635 12.637H42.2635V24.637H30.2635V12.637Z" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.26355 36.637H18.2635V48.637H6.26355V36.637Z" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M30.2635 36.637H42.2635V48.637H30.2635V36.637Z" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: "Digital Marketing",
    description:
      "SEO, social media management, content creation, email marketing, and digital advertising campaigns.",
  },
  {
    icon: `<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.26355 42.637H40.2635M8.26355 42.637V8.63696C8.26355 7.57631 9.12985 6.63696 10.2635 6.63696H30.2635L40.2635 16.637V42.637M8.26355 42.637L40.2635 42.637M30.2635 6.63696V16.637H40.2635M16.2635 24.637H32.2635M16.2635 32.637H32.2635" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    title: "Content Services",
    description:
      "Content writing, translation services, transcription, and multimedia content creation.",
  },
  {
    icon: `<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.2635 34.637C29.7864 34.637 34.2635 30.1599 34.2635 24.637C34.2635 19.1142 29.7864 14.637 24.2635 14.637C18.7407 14.637 14.2635 19.1142 14.2635 24.637C14.2635 30.1599 18.7407 34.637 24.2635 34.637Z" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.2635 6.63696V8.63696" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.2635 40.637V42.637" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.26355 24.637H6.26355" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42.2635 24.637H40.2635" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.2635 12.637L13.6775 14.051" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.8495 35.223L36.2635 36.637" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.2635 36.637L13.6775 35.223" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.8495 14.051L36.2635 12.637" stroke="#4F46E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: "Virtual Assistance",
    description:
      "Personal assistance, scheduling, email management, and administrative task handling.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-[#f5f7ff] flex-grow">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-[1312px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
              Our Services
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              We offer comprehensive outsourcing solutions tailored to meet your
              business needs and drive growth.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
