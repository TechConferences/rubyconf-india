import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import LanguageRoast from "@/components/LanguageRoast";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import SponsorshipPlans from "@/components/SponsorshipPlans";
import Sponsors from "@/components/Sponsors";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Schedule /> */}
        {/* <Speakers /> */}
        <LanguageRoast />
        <SponsorshipPlans />
        <GetInTouch />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
