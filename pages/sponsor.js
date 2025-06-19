import { useState } from "react";
import SponsorDisplay from "../components/SponsorDisplay";
// import { sponsorLogo } from "../assets/sponsorLogo";
import PageTitle from "../components/PageTitle";
import SponsorTag from "../components/SponsorTag";
import Footer from "../components/Footer";

const Sponsor = ({ hideFooter = false }) => {
  // const [sponsorData, setSponsorData] = useState(sponsorLogo());

  const handleTagClick = (sponsorYear) => {
    let updateSponsorData = sponsorData.map((sps) => {
      if (sps.year === sponsorYear) {
        return { ...sps, isActive: true };
      } else {
        return { ...sps, isActive: false };
      }
    });

    setSponsorData(updateSponsorData);
  };

  return (
    <div className="relative" style={{ minHeight: "100vh", position: "relative" }}>
      <section
        className="relative z-[1] min-h-[100vh] text-center text-tertiary-300 overflow-hidden pb-20 sm:pb-24"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="absolute bottom-30 -z-10 min-h-[100vh]"
          style={{
            backgroundImage: `url(/season13/SPONSORS/8.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            transform: "rotate(90deg) scale(1.5)",
            transformOrigin: "center",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Top Title Section */}
        <div className="flex items-center justify-center gap-2 pt-10 pb-5 z-10 relative mt-10 sm:mt-[70px]">
          <img
            src="/season13/HOMEPAGE/MASCOT_KV.png"
            alt="mascot"
            className="h-[60px] sm:h-[80px] md:h-[100px] w-auto object-contain"
          />
          <h1 className="text-tertiary-300 font-bold text-3xl sm:text-headline-48 md:text-display-64 lg:text-display-64">SPONSORS</h1>
        </div>

        {/* Sponsor PNG */}
        <div className="relative w-full mt-12 sm:mt-16 md:mt-20">
          <img
            src="/season13/SPONSORS/sponsors.png"
            alt="sponsors banner"
            className="relative z-20 opacity-[90%] w-[250px] sm:w-[250px] md:w-[350px] lg:w-[500px] mx-auto scale-[200%] object-contain"
          />
        </div>

        <h2 className="text-yellow-300 text-headline-48 sm:text-headline-37 md:text-headline-48 lg:text-headline-48 font-semibold relative z-30 mt-20 sm:mt-32 md:mt-40 mx-auto w-[90%] sm:w-[80%]">
          Stay tuned for<br />this season&apos;s sponsor!
        </h2>

        <div className="relative w-full mt-30 sm:mt-32 md:mt-40">
          <img
            src="/season13/SPONSORS/land_bit.png"
            alt="land decoration"
            className="absolute z-0 object-cover scale-[140%]"
            style={{ bottom: 0 }}
          />
        </div>
      </section>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default Sponsor;
