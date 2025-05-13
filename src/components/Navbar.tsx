import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-burgundy-800">
            <span className="font-display">RubyConf</span>
            <span className="text-burgundy-700">India</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="font-medium hover:text-burgundy-700 transition-colors"
          >
            About
          </a>
          {/* <a href="#schedule" className="font-medium hover:text-burgundy-700 transition-colors">
            Schedule
          </a>
          <a href="#speakers" className="font-medium hover:text-burgundy-700 transition-colors">
            Speakers
          </a> */}
          <a
            href="#language-roast"
            className="font-medium hover:text-burgundy-700 transition-colors"
          >
            Language Roast
          </a>
          <a
            href="#sponsors"
            className="font-medium hover:text-burgundy-700 transition-colors"
          >
            Sponsors
          </a>
          <a
            href="#"
            className="font-medium hover:text-burgundy-700 transition-colors"
          >
            Photo Gallery
          </a>
          <a href="#" className="inline-block">
            <Button className="bg-burgundy-800 hover:bg-burgundy-900">
              Register Now
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#schedule"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule
            </a>
            <a
              href="#speakers"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speakers
            </a>
            <a
              href="#language-roast"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Language Roast
            </a>
            <a
              href="#sponsors"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sponsors
            </a>
            <Button className="bg-burgundy-800 hover:bg-burgundy-900 w-full">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
