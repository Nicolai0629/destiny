
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-[#f5f7ff] flex-grow">
        <section className="py-16">
          <div className="max-w-[1312px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
              Contact Us
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Get in touch with our team for any inquiries or support.
            </p>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Contact Form */}
              <Card className="w-full lg:w-1/2 p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full h-32 resize-y bg-white"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Office Location */}
                <Card className="p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Location</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-indigo-600 mt-1" />
                    <p className="text-gray-600">
                      123 Business Street, Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </Card>

                {/* Contact Information */}
                <Card className="p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="text-indigo-600" />
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-indigo-600" />
                      <p className="text-gray-600">contact@outsourcepro.com</p>
                    </div>
                  </div>
                </Card>

                {/* Business Hours */}
                <Card className="p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="flex items-start gap-3">
                    <Clock className="text-indigo-600 mt-1" />
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
