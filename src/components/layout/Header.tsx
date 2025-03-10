import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="box-border sticky backdrop-blur-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] z-[100] bg-[rgba(255,255,255,0.8)] top-0">
      <nav className="box-border max-w-[1312px] flex justify-between items-center mx-auto my-0 px-6 py-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73bdf2702665dd02883d6dd72fe981922edc43de"
          alt="Logo"
          className="box-border w-[179px] h-[27px]"
        />

        <div className="box-border flex gap-6 m-0 p-0 max-md:hidden">
          <a
            href="#services"
            className="box-border text-gray-600 underline text-base"
          >
            Services
          </a>
          <a
            href="#about"
            className="box-border text-gray-600 underline text-base"
          >
            About
          </a>
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
              <a href="#services" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">
                FAQ's
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
