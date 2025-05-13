
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schedule = () => {
  return (
    <section id="schedule" className="py-20">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Conference Schedule</h2>
          <div className="w-24 h-1 bg-ruby-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Two days packed with exciting talks, workshops, and networking opportunities.
            All times are in India Standard Time (IST).
          </p>
        </div>

        <Tabs defaultValue="day1" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="day1" className="text-base py-3">
                Day 1 - June 15
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-base py-3">
                Day 2 - June 16
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="day1" className="pt-4">
            <div className="relative pl-8 schedule-timeline">
              {/* Morning */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-ruby-800 mb-6">Morning</h3>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">8:30 AM - 9:30 AM</div>
                    <h4 className="text-lg font-bold mt-2">Registration & Breakfast</h4>
                    <p className="text-gray-600 mt-1">
                      Pick up your badge and enjoy a complimentary breakfast with fellow attendees
                    </p>
                  </div>
                </div>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">9:30 AM - 10:00 AM</div>
                    <h4 className="text-lg font-bold mt-2">Opening Ceremony</h4>
                    <p className="text-gray-600 mt-1">
                      Welcome address and introduction to RubyConf India 2025
                    </p>
                    <div className="mt-3 flex items-center">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Speaker" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <div className="font-medium">Priya Sharma</div>
                        <div className="text-sm text-gray-500">Conference Director</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">10:00 AM - 11:00 AM</div>
                    <h4 className="text-lg font-bold mt-2">Keynote: The Future of Ruby in the AI Era</h4>
                    <p className="text-gray-600 mt-1">
                      Exploring how Ruby is adapting to the challenges and opportunities of artificial intelligence
                    </p>
                    <div className="mt-3 flex items-center">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Speaker" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <div className="font-medium">Raj Patel</div>
                        <div className="text-sm text-gray-500">Ruby Core Contributor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Afternoon */}
              <div>
                <h3 className="text-xl font-bold text-ruby-800 mb-6">Afternoon</h3>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">12:00 PM - 1:00 PM</div>
                    <h4 className="text-lg font-bold mt-2">Panel Discussion: Ruby in Production</h4>
                    <p className="text-gray-600 mt-1">
                      Industry leaders share their experiences scaling Ruby applications
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Panelist" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm">Anjali Menon</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Panelist" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm">Dev Patel</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Panelist" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm">Sunita Rao</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-ruby-50 border-l-4 border-ruby-600 rounded-lg border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="inline-block bg-ruby-600 text-white text-xs px-2 py-1 rounded mb-2">Featured</div>
                    <div className="text-gray-500">3:00 PM - 4:30 PM</div>
                    <h4 className="text-lg font-bold mt-2">Language Roast: Ruby vs JavaScript vs Python</h4>
                    <p className="text-gray-600 mt-1">
                      A fun, entertaining session where language advocates playfully critique each other's languages
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Presenter" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm">Arjun Kumar (Ruby)</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Presenter" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm">Maya Singh (JavaScript)</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Presenter" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm">Vikram Seth (Python)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">5:00 PM - 7:00 PM</div>
                    <h4 className="text-lg font-bold mt-2">Networking Mixer</h4>
                    <p className="text-gray-600 mt-1">
                      Connect with speakers, sponsors, and fellow attendees over drinks and appetizers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="day2" className="pt-4">
            <div className="relative pl-8 schedule-timeline">
              {/* Morning */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-ruby-800 mb-6">Morning</h3>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">9:00 AM - 10:00 AM</div>
                    <h4 className="text-lg font-bold mt-2">Ruby on Rails: New Features and Best Practices</h4>
                    <p className="text-gray-600 mt-1">
                      A deep dive into the latest Rails updates and patterns for modern applications
                    </p>
                    <div className="mt-3 flex items-center">
                      <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Speaker" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <div className="font-medium">Lakshmi Iyer</div>
                        <div className="text-sm text-gray-500">Rails Core Team</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">10:30 AM - 11:30 AM</div>
                    <h4 className="text-lg font-bold mt-2">Ruby for Machine Learning: Practical Applications</h4>
                    <p className="text-gray-600 mt-1">
                      Using Ruby tools for data analysis and machine learning projects
                    </p>
                    <div className="mt-3 flex items-center">
                      <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Speaker" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <div className="font-medium">Sanjay Chopra</div>
                        <div className="text-sm text-gray-500">Data Scientist, InnoTech</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Afternoon */}
              <div>
                <h3 className="text-xl font-bold text-ruby-800 mb-6">Afternoon</h3>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">1:00 PM - 2:30 PM</div>
                    <h4 className="text-lg font-bold mt-2">Workshop: Building APIs with Ruby</h4>
                    <p className="text-gray-600 mt-1">
                      Hands-on session on creating robust and scalable APIs with Ruby
                    </p>
                    <div className="mt-3 flex items-center">
                      <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Instructor" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <div className="font-medium">Rahul Verma</div>
                        <div className="text-sm text-gray-500">API Architect, CloudWorks</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">3:00 PM - 4:00 PM</div>
                    <h4 className="text-lg font-bold mt-2">Panel: The Future of Ruby Development in India</h4>
                    <p className="text-gray-600 mt-1">
                      Industry leaders discuss opportunities and challenges for Ruby developers in India
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Panelist" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm">Deepika Gupta</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Panelist" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm">Karthik Ramesh</span>
                      </div>
                      <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Panelist" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-sm">Meera Singh</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8 schedule-item">
                  <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gray-500">4:30 PM - 5:30 PM</div>
                    <h4 className="text-lg font-bold mt-2">Closing Keynote: Ruby's Role in the Evolving Tech Landscape</h4>
                    <p className="text-gray-600 mt-1">
                      Reflecting on Ruby's journey and its place in the future of technology
                    </p>
                    <div className="mt-3 flex items-center">
                      <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Speaker" className="w-8 h-8 rounded-full mr-3" />
                      <div>
                        <div className="font-medium">Dr. Aditya Singh</div>
                        <div className="text-sm text-gray-500">Technology Futurist</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;
