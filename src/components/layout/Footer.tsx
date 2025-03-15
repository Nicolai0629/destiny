
import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, ArrowUpCircleIcon } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="block mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73bdf2702665dd02883d6dd72fe981922edc43de"
                alt="OutSource Pro Logo"
                className="h-8 w-auto invert"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing premium outsourcing solutions to help businesses scale efficiently while maintaining quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Customer Support</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Back Office Support</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="mailto:info@outsourcepro.com" className="text-gray-400 hover:text-white transition-colors">info@outsourcepro.com</a></li>
              <li><a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">+1 (555) 123-4567</a></li>
              <li className="text-gray-400">123 Business Ave, Suite 100, New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} OutSource Pro. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUpCircleIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
