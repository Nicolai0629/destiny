
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { Menu } from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky backdrop-blur-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] z-[100] bg-[rgba(255,255,255,0.8)] top-0">
      <nav className="max-w-[1312px] flex justify-between items-center mx-auto my-0 px-6 py-5">
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73bdf2702665dd02883d6dd72fe981922edc43de"
            alt="Logo"
            className="w-[179px] h-[27px]"
          />
        </Link>

        <div className="flex gap-6 m-0 p-0 max-md:hidden">
          <Link
            to="/services"
            className={`text-gray-600 text-base ${location.pathname === "/services" ? "font-semibold" : ""} hover:text-indigo-600 transition-colors`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`text-gray-600 text-base ${location.pathname === "/about" ? "font-semibold" : ""} hover:text-indigo-600 transition-colors`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-gray-600 text-base ${location.pathname === "/contact" ? "font-semibold" : ""} hover:text-indigo-600 transition-colors`}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className={`text-gray-600 text-base ${location.pathname === "/blog" ? "font-semibold" : ""} hover:text-indigo-600 transition-colors`}
          >
            Blog
          </Link>
          <Link
            to="/pricing"
            className={`text-gray-600 text-base ${location.pathname === "/pricing" ? "font-semibold" : ""} hover:text-indigo-600 transition-colors`}
          >
            Pricing
          </Link>
        </div>

        <button 
          className="text-white text-[12.5px] bg-indigo-600 px-[26px] py-2.5 rounded-full border-2 border-solid border-transparent hover:bg-indigo-700 transition-colors"
          onClick={() => setLoginDialogOpen(true)}
        >
          Get Started
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hidden max-md:block"
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden z-50">
            <div className="flex flex-col gap-4">
              <Link 
                to="/services"
                className="text-gray-600 hover:text-indigo-600 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about"
                className="text-gray-600 hover:text-indigo-600 py-2 border-b border-gray-100" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className="text-gray-600 hover:text-indigo-600 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/blog"
                className="text-gray-600 hover:text-indigo-600 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/pricing"
                className="text-gray-600 hover:text-indigo-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
    </header>
  );
};
