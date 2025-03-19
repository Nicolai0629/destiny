
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky z-[100] top-0 transition-all duration-300",
        isScrolled
          ? "backdrop-blur-md shadow-md bg-white/90 py-3"
          : "backdrop-blur-[2px] bg-[rgba(255,255,255,0.8)] py-5"
      )}
    >
      <nav className="max-w-[1312px] flex justify-between items-center mx-auto my-0 px-6">
        <Link to="/" className="relative z-50 transition-transform hover:scale-105">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73bdf2702665dd02883d6dd72fe981922edc43de"
            alt="OutSource Pro Logo"
            className="w-[179px] h-[27px]"
          />
        </Link>

        <div className="hidden md:flex gap-6 m-0 p-0">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-gray-600 text-base transition-all duration-200 hover:text-indigo-600 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                location.pathname === link.path
                  ? "font-semibold text-indigo-600 after:scale-x-100"
                  : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button 
          className="text-white text-[12.5px] bg-indigo-600 px-[26px] py-2.5 rounded-md border-2 border-solid border-transparent hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
          onClick={() => setLoginDialogOpen(true)}
        >
          Get Started
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hidden max-md:flex relative z-50 text-gray-700 hover:text-indigo-600 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed md:hidden top-0 right-0 bottom-0 w-[75%] max-w-[320px] bg-white shadow-xl z-40 flex flex-col"
            >
              <div className="pt-20 px-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-gray-700 py-3 px-4 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-all bg-white",
                      location.pathname === link.path ? "bg-indigo-50 text-indigo-600 font-medium" : ""
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setLoginDialogOpen(true);
                    }}
                    className="w-full text-center bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
    </header>
  );
};
