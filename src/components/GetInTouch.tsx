import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_EMAIL } from "@/lib/constant";
import { Calendar, Mail, MessageSquare } from "lucide-react";

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions about RubyConf India 2025? Reach out to us using any
            of the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-burgundy-200 shadow-lg">
            <CardHeader className="burgundy-gradient text-white">
              <CardTitle className="font-display text-2xl">
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-burgundy-100 p-2 rounded-full text-burgundy-800">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Call for Papers Opens</h4>
                  <p className="text-gray-600">May 19, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-burgundy-100 p-2 rounded-full text-burgundy-800">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Call for Papers Closes</h4>
                  <p className="text-gray-600">July 11, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-burgundy-100 p-2 rounded-full text-burgundy-800">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Registration Starts</h4>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-burgundy-100 p-2 rounded-full text-burgundy-800">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Conference Dates</h4>
                  <p className="text-gray-600">September 11-12, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-burgundy-200 shadow-lg">
            <CardHeader className="burgundy-gradient text-white">
              <CardTitle className="font-display text-2xl">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-burgundy-100 p-2 rounded-full text-burgundy-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">General Inquiries</h4>
                  <p className="text-gray-600">{CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-burgundy-100 p-2 rounded-full text-burgundy-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Sponsorship Opportunities</h4>
                  <p className="text-gray-600">{CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-burgundy-100 p-2 rounded-full text-burgundy-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Speaker Support</h4>
                  <p className="text-gray-600">{CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-burgundy-100 p-2 rounded-full text-burgundy-800">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold">Have a Question?</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    <Button className="bg-burgundy-800 hover:bg-burgundy-900 w-max">
                      Send Message
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
