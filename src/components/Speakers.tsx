
import { Card, CardContent } from "@/components/ui/card";

const speakersData = [
  {
    id: 1,
    name: "Raj Patel",
    role: "Ruby Core Contributor",
    company: "GitHub",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    topic: "The Future of Ruby in the AI Era"
  },
  {
    id: 2,
    name: "Lakshmi Iyer",
    role: "Rails Core Team",
    company: "Shopify",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    topic: "Ruby on Rails: New Features and Best Practices"
  },
  {
    id: 3,
    name: "Arjun Kumar",
    role: "Ruby Advocate",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    topic: "Language Roast: Ruby Perspective"
  },
  {
    id: 4,
    name: "Maya Singh",
    role: "JavaScript Expert",
    company: "Microsoft",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    topic: "Language Roast: JavaScript Perspective"
  },
  {
    id: 5,
    name: "Vikram Seth",
    role: "Python Developer",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    topic: "Language Roast: Python Perspective"
  },
  {
    id: 6,
    name: "Sanjay Chopra",
    role: "Data Scientist",
    company: "InnoTech",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    topic: "Ruby for Machine Learning: Practical Applications"
  },
  {
    id: 7,
    name: "Dr. Aditya Singh",
    role: "Technology Futurist",
    company: "TechVision Research",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    topic: "Ruby's Role in the Evolving Tech Landscape"
  },
  {
    id: 8,
    name: "Priya Sharma",
    role: "Conference Director",
    company: "RubyConf India",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    topic: "Opening Ceremony"
  }
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Speakers</h2>
          <div className="w-24 h-1 bg-burgundy-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Meet the industry experts and thought leaders who will be sharing their knowledge and insights at RubyConf India 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakersData.map((speaker) => (
            <Card key={speaker.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg">{speaker.name}</h3>
                <div className="text-burgundy-700 text-sm font-medium">{speaker.role}</div>
                <div className="text-gray-500 text-sm mb-3">{speaker.company}</div>
                <div className="text-xs font-medium bg-burgundy-50 text-burgundy-800 px-3 py-1 rounded-full inline-block">
                  {speaker.topic}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
