const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="py-12">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="text-2xl font-bold mb-4">
                <span className="font-display">RubyConf</span>
                <span className="text-burgundy-300">India</span>
              </div>
              <p className="text-gray-400 mb-4">
                The premier Ruby conference in India. Join us for two days of
                technical talks, panel discussions, and networking.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://x.com/rubyconfindia"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/rubyconfindia2024/"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#schedule"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="#speakers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    href="#language-roast"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Language Roast
                  </a>
                </li>
                <li>
                  <a
                    href="#sponsors"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-center items-center text-center">
              <p className="text-gray-400 mb-4">
                RubyConf India 2025 is the place to be! Join us for an exciting
                experience of learning, networking, and growing with Ruby
                developers across the country.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 RubyConf India. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
