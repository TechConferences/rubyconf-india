import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-800/10 to-burgundy-900/10 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-full -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1NDAyMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMCAxNGgxdi0yaC0xdjJ6bTAtMTJoMXYtMmgtMXYyek0zMyAzMWgxdi0yaC0xdjJ6bTAgMTRoMXYtMmgtMXYyek0zMyAzM2gxdi0yaC0xdjJ6bTAgNGgxdi0yaC0xdjJ6bTAtOGgxdi0yaC0xdjJ6bTAtNGgxdi0yaC0xdjJ6bTAgMTJoMXYtMmgtMXYyek0zMyAyM2gxdi0yaC0xdjJ6bTAtMTJoMXYtMmgtMXYyek0zMyAyN2gxdi0yaC0xdjJ6bTAgNGgxdi0yaC0xdjJ6bTAgMTZoMXYtMmgtMXYyek0zMyAxN2gxdi0yaC0xdjJ6bTAgMjhoMXYtMmgtMXYyem0tNCAxMGg0djFoLTR2LTF6bTAtMTZoNHYxaC00di0xem0tNS0zaDF2LTJoLTF2MnptMCAxNGgxdi0yaC0xdjJ6bTAtMTJoMXYtMmgtMXYyek0yNCAzM2gxdi0yaC0xdjJ6bTAgNGgxdi0yaC0xdjJ6bTAtOGgxdi0yaC0xdjJ6bTAtNGgxdi0yaC0xdjJ6bTAgMTJoMXYtMmgtMXYyek0yNCAyM2gxdi0yaC0xdjJ6bTAtMTJoMXYtMmgtMXYyek0yNCAyN2gxdi0yaC0xdjJ6bTAgNGgxdi0yaC0xdjJ6bTAgMTZoMXYtMmgtMXYyek0yNCAxN2gxdi0yaC0xdjJ6bTAgMjhoMXYtMmgtMXYyem0tNCAwaDR2MWgtNHYtMXptMC0xOGg0djFoLTR2LTF6bS04IDJoMXYtMmgtMXYyek0xMiA0NWgxdi0yaC0xdjJ6bTAtMTJoMXYtMmgtMXYyek0xMiAzM2gxdi0yaC0xdjJ6bTAgNGgxdi0yaC0xdjJ6bTAtOGgxdi0yaC0xdjJ6bTAtNGgxdi0yaC0xdjJ6bTAgMTJoMXYtMmgtMXYyek0xMiAyM2gxdi0yaC0xdjJ6bTAtMTJoMXYtMmgtMXYyek0xMiAyN2gxdi0yaC0xdjJ6bTAgNGgxdi0yaC0xdjJ6bTAgMTZoMXYtMmgtMXYyek0xMiAxN2gxdi0yaC0xdjJ6bTAgMjhoMXYtMmgtMXYyek0xMiAzMWg0djFoLTR2LTF6bTAtMThoNHYxaC00di0xek05IDQ1aDR2MUg5di0xem0wLTJoNHYxSDl2LTF6bTAtNGg0djFIOXYtMXptMC00aDR2MUg5di0xem0wLTJoNHYxSDl2LTF6bTAtMmg0djFIOXYtMXptMC00aDR2MUg5di0xem0wLTJoNHYxSDl2LTF6TTkgOWg0djFIOXYtMXptMC0yaDR2MUg5Vjd6TTkgMWg0djFIOVYxem0wIDRoNHYxSDlWNXptMCAyaDR2MUg5Vjd6bTAtNGg0djFIOVYzeidvIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')] opacity-90"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
            <span className="text-burgundy-800">RubyConf</span> India 2025
          </h1>
          <div className="burgundy-gradient text-white text-lg md:text-xl font-medium px-6 py-2 rounded-full mb-8">
            September 12-13, 2025 • Jaipur, India
          </div>
          <p className="text-lg md:text-xl max-w-3xl mb-10">
            Join India's largest Ruby community for two days of inspiring talks,
            networking opportunities and{" "}
            <span className="text-red-500">language roast.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-burgundy-800 hover:bg-burgundy-900 text-lg px-8 py-6">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="border-burgundy-700 text-burgundy-800 hover:bg-burgundy-50 text-lg px-8 py-6"
            >
              Become a Speaker
            </Button>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-8 animate-fade-in">
          <div className="text-center md:text-left">
            <div className="text-gray-500 font-medium">Date & Location</div>
            <div className="text-xl font-bold">September 12-13, 2025</div>
            <div className="text-gray-700">Hotel Clarks Amer, Jaipur</div>
          </div>

          <div className="text-center">
            <div className="text-gray-500 font-medium">Expected Attendees</div>
            <div className="text-4xl font-bold text-burgundy-800">300+</div>
            <div className="text-gray-700">Ruby Enthusiasts</div>
          </div>

          <div className="text-center md:text-right">
            <div className="text-gray-500 font-medium">Highlights</div>
            <div className="text-xl font-bold">10+ Speakers</div>
            <div className="text-gray-700">
              Technical Talks
              <p>
                <span className="text-red-500">Language roast</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
