import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import LanguageRoast from "@/components/LanguageRoast";
import Footer from "@/components/Footer";
import SponsorshipPlans from "@/components/SponsorshipPlans";
import Sponsors from "@/components/Sponsors";
import GetInTouch from "@/components/GetInTouch";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      <main>
        <Hero />

        <section id="about">
          <About />
        </section>

        {/* <section id="schedule">
          <Schedule />
        </section> */}

        {/* <section id="speakers">
          <Speakers />
        </section> */}

        <section id="language-roast">
          <LanguageRoast />
        </section>

        {/* <section id="sponsors">
          <Sponsors />
        </section> */}

        <section id="sponsorship-plans">
          <SponsorshipPlans />
        </section>

        <section id="get-in-touch">
          <GetInTouch />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
