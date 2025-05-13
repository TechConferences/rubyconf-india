
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About RubyConf India</h2>
          <div className="w-24 h-1 bg-burgundy-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 text-burgundy-800">The Premier Ruby Event in India</h3>
            <p className="text-gray-700 mb-4">
              RubyConf India is the annual gathering of Rubyists and enthusiasts
              from across India and beyond. Since its inception, the conference has
              been instrumental in growing the Ruby community in the region.
            </p>
            <p className="text-gray-700 mb-4">
              Join us for two action-packed days of knowledge sharing, networking,
              and celebration of everything Ruby. From beginner-friendly sessions
              to advanced technical deep dives, RubyConf India has something for
              everyone in the Ruby ecosystem.
            </p>
            
            <h4 className="font-bold mt-8 mb-4">What to expect:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-burgundy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Technical Talks:</strong> In-depth sessions on Ruby, Rails, and related technologies
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-burgundy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Panel Discussions:</strong> Industry experts discuss trends and future of Ruby
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-burgundy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Language Roast:</strong> Our new entertaining format where languages playfully critique each other
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-burgundy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Networking:</strong> Connect with hundreds of developers, hiring managers, and community leaders
                </div>
              </li>
            </ul>
            
            <Button className="mt-8 bg-burgundy-800 hover:bg-burgundy-900">
              Learn More
            </Button>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-burgundy-600 to-burgundy-900 h-full w-full flex items-center justify-center p-8 text-center text-white">
                <div>
                  <div className="mb-4">
                    <svg width="80" height="64" viewBox="0 0 80 64" className="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M40 0L80 32L40 64L0 32L40 0Z" fill="#FFFFFF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M40 6L72 32L40 58L8 32L40 6Z" fill="#540221" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M40 16L60 32L40 48L20 32L40 16Z" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">7th Annual Conference</h3>
                  <p className="text-white/80">
                    Join us for our biggest conference yet as we celebrate
                    7 years of Ruby excellence in India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg hidden md:block">
              <div className="text-center">
                <div className="text-5xl font-bold font-display text-burgundy-800">7+</div>
                <div className="text-sm text-gray-600">Years of Building<br/>Ruby Community</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
