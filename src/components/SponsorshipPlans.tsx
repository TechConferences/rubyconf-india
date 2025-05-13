import { Button } from "@/components/ui/button";
import { Trophy, Star, Award } from "lucide-react";

const SponsorshipPlans = () => {
  return (
    <section id="sponsorship-plans" className="py-20 bg-gray-50">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Call for Sponsors
          </h2>
          <div className="w-24 h-1 bg-ruby-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Support the Ruby community and connect with hundreds of developers
            and companies. Multiple sponsorship tiers are available to suit
            organizations of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-ruby-600 py-3 text-center">
              <h3 className="text-white font-bold text-lg">Platinum Sponsor</h3>
            </div>
            <div className="flex justify-center mt-4">
              <Trophy className="h-10 w-10 text-yellow-500" />
            </div>
            <div className="p-6">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">₹15,00,000</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Exhibition Stall (12ft X 8ft) </strong>
                    for branded visitor engagement.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>6 Exhibition Standees </strong>to capture attention
                    and attract visitors!
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Lanyard Branding </strong>
                    to showcase your company's logo on the conference lanyard.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>6 Conference Tickets </strong>
                    to provide dedicated access for your company's
                    representatives at the conference.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Promotional Talk </strong>
                    to offer an exclusive 5-minute slot to discuss your company.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Promotional Video (1-min) </strong>
                    shown between speakers to showcase your brand's offerings
                    and past work (visual only).
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Brand Visibility </strong>
                    with your company's logo featured on the Conference Website,
                    Agenda Schedule, Registration Desk, and Stage. Social Media
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Social Media Package </strong>
                    with brand promotional posts on the conference's social
                    media channels.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-ruby-700 py-3 text-center">
              <h3 className="text-white font-bold text-lg">Gold Sponsor</h3>
            </div>
            <div className="flex justify-center mt-4">
              <Star className="h-10 w-10 text-yellow-600" />
            </div>
            <div className="p-6">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">₹7,00,000</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Exhibition Stall (8ft X 8ft) </strong>
                    for branded visitor engagement.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>4 Exhibition Standees </strong>to capture attention
                    and attract visitors!
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>4 Conference Tickets </strong>
                    to provide dedicated access for your company's
                    representatives at the conference.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Promotional Video (30-sec) </strong>
                    shown between speakers to showcase your brand's offerings
                    and past work (visual only).
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Brand Visibility </strong>
                    with your company's logo featured on the Conference Website,
                    Agenda Schedule, Registration Desk, and Stage. Social Media
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Social Media Package </strong>
                    with brand promotional posts on the conference's social
                    media channels.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-ruby-800 py-3 text-center">
              <h3 className="text-white font-bold text-lg">Silver Sponsor</h3>
            </div>
            <div className="flex justify-center mt-4">
              <Award className="h-10 w-10 text-gray-400" />
            </div>
            <div className="p-6">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">₹2,00,000</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>3 Exhibition Standees </strong>to capture attention
                    and attract visitors!
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>2 Conference Tickets </strong>
                    to provide dedicated access for your company's
                    representatives at the conference.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Brand Visibility </strong>
                    with your company's logo featured on the Conference Website,
                    Agenda Schedule, Registration Desk, and Stage. Social Media
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-ruby-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>Social Media Package </strong>
                    with brand promotional posts on the conference's social
                    media channels.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Single Contact Us button in the middle */}
        <div className="text-center mb-12">
          <Button className="px-10 py-6 text-lg bg-ruby-600 hover:bg-ruby-700">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipPlans;
