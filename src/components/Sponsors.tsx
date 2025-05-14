import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import JoshLogo from "@/assets/company-logos/josh-logo.svg";
import { CONTACT_EMAIL } from "@/lib/constant";

const Sponsors = () => {
  const sponsors = {
    platinum: [
      {
        name: "Josh Software",
        logo: JoshLogo,
        link: "https://www.joshsoftware.com",
      },
    ],
    gold: [
      {
        name: "Josh Software",
        logo: JoshLogo,
        link: "https://www.joshsoftware.com",
      },
      {
        name: "Josh Software",
        logo: JoshLogo,
        link: "https://www.joshsoftware.com",
      },
      {
        name: "Josh Software",
        logo: JoshLogo,
        link: "https://www.joshsoftware.com",
      },
    ],
    silver: [
      {
        name: "Josh Software",
        logo: JoshLogo,
        link: "https://www.joshsoftware.com",
      },
      {
        name: "Josh Software",
        logo: JoshLogo,
        link: "https://www.joshsoftware.com",
      },
      {
        name: "Josh Software",
        logo: JoshLogo,
        link: "https://www.joshsoftware.com",
      },
      {
        name: "Josh Software",
        logo: JoshLogo,
        link: "https://www.joshsoftware.com",
      },
    ],
  };

  const handleMailTo = (subject: string) => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}`;
  };

  return (
    <section
      id="sponsors"
      className="relative py-32 overflow-hidden bg-gray-100 text-gray-900"
    >
      <div className="absolute inset-0 z-0">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-300/10"></div> */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, rgba(120, 2, 6, 0.05) 0%, transparent 20%)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Our Valued Sponsors
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-700">
            These visionary companies make RubyConfIndia possible through their
            generous support
          </p>
        </motion.div>

        <div className="space-y-24">
          {Object.entries(sponsors).map(([tier, sponsorsList]) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-12 capitalize text-gray-800">
                {tier} Sponsors
              </h3>
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-x-20 gap-y-20">
                {sponsorsList.map((sponsor, index) => (
                  <motion.div
                    key={`${sponsor.name}-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="relative py-8 px-4"
                  >
                    <a
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-40 max-w-[300px] min-w-[200px] object-contain transition-transform duration-300"
                      />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-32 bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-3xl font-bold mb-5 text-gray-800">
            Join Our Sponsorship Family
          </h3>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-8">
            Get unparalleled visibility while supporting India's Ruby community
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-8 py-4 text-lg"
              onClick={() => handleMailTo("BE A PROUD SPONSOR")}
            >
              BE A PROUD SPONSOR
            </Button>
            <Button
              className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-8 py-4 text-lg"
              onClick={() => handleMailTo("SPONSORSHIP PROSPECTUS")}
            >
              SPONSORSHIP PROSPECTUS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
