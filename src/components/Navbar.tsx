import { useState } from "react";
import { Button } from "@/components/ui/button";
import RCILOGO from "@/assets/RCI logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-burgundy-800 text-white py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/" className="flex items-center overflow-hidden h-12">
          <img
            src={RCILOGO}
            alt="RubyConf India Logo"
            className="h-12 transform scale-150 object-contain ml-4"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="font-medium hover:text-white/80 transition-colors"
          >
            About
          </a>
          <a
            href="#language-roast"
            className="font-medium hover:text-white/80 transition-colors"
          >
            Language Roast
          </a>
          <a
            href="#sponsors"
            className="font-medium hover:text-white/80 transition-colors"
          >
            Sponsors
          </a>
          <a
            href="https://www.flickr.com/photos/199139119@N05/albums/72177720322448501/"
            target="_blank"
            className="font-medium hover:text-white/80 transition-colors"
          >
            Photo Gallery
          </a>
          <a href="#">
            <Button className="bg-white text-burgundy-800 hover:bg-gray-100">
              Register Now
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-white"
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
        <div className="md:hidden bg-burgundy-800 text-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="px-4 py-2 hover:bg-burgundy-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#schedule"
              className="px-4 py-2 hover:bg-burgundy-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule
            </a>
            <a
              href="#speakers"
              className="px-4 py-2 hover:bg-burgundy-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speakers
            </a>
            <a
              href="#language-roast"
              className="px-4 py-2 hover:bg-burgundy-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Language Roast
            </a>
            <a
              href="#sponsors"
              className="px-4 py-2 hover:bg-burgundy-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sponsors
            </a>
            <Button className="bg-white text-burgundy-800 hover:bg-gray-100 w-full">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
