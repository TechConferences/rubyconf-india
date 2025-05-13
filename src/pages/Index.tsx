
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import LanguageRoast from "@/components/LanguageRoast";
import Sponsors from "@/components/Sponsors";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Speakers />
        <LanguageRoast />
        <Sponsors />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
