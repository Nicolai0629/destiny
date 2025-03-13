
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="box-border sticky backdrop-blur-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] z-[100] bg-[rgba(255,255,255,0.8)] top-0">
      <nav className="box-border max-w-[1312px] flex justify-between items-center mx-auto my-0 px-6 py-5">
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73bdf2702665dd02883d6dd72fe981922edc43de"
            alt="Logo"
            className="box-border w-[179px] h-[27px]"
          />
        </Link>

        <div className="box-border flex gap-6 m-0 p-0 max-md:hidden">
          {isHomePage ? (
            <>
              <a
                href="#services"
                className="box-border text-gray-600 underline text-base"
              >
                Services
              </a>
              <Link
                to="/about"
                className="box-border text-gray-600 underline text-base"
              >
                About
              </Link>
              <a
                href="#faq"
                className="box-border text-gray-600 underline text-base"
              >
                FAQ's
              </a>
              <a
                href="#contact"
                className="box-border text-gray-600 underline text-base"
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link
                to="/#services"
                className="box-border text-gray-600 underline text-base"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="box-border text-gray-600 underline text-base"
              >
                About
              </Link>
              <Link
                to="/#faq"
                className="box-border text-gray-600 underline text-base"
              >
                FAQ's
              </Link>
              <Link
                to="/#contact"
                className="box-border text-gray-600 underline text-base"
              >
                Contact
              </Link>
            </>
          )}
        </div>

        <button className="box-border text-white text-[12.5px] bg-indigo-600 px-[26px] py-2.5 rounded-full border-2 border-solid border-black hover:bg-indigo-700 transition-colors">
          Get Started
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hidden max-md:block"
          aria-label="Toggle mobile menu"
        >
          <i className="ti ti-menu-2 text-2xl" />
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden">
            <div className="flex flex-col gap-4">
              {isHomePage ? (
                <>
                  <a href="#services" className="text-gray-600 hover:text-gray-900">
                    Services
                  </a>
                  <Link to="/about" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                  <a href="#faq" className="text-gray-600 hover:text-gray-900">
                    FAQ's
                  </a>
                  <a href="#contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link to="/#services" className="text-gray-600 hover:text-gray-900">
                    Services
                  </Link>
                  <Link to="/about" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                  <Link to="/#faq" className="text-gray-600 hover:text-gray-900">
                    FAQ's
                  </Link>
                  <Link to="/#contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
