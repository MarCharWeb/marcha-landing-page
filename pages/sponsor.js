import { useState } from "react";
import SponsorDisplay from "../components/SponsorDisplay";
import { sponsorLogo } from "../assets/sponsorLogo";
import PageTitle from "../components/PageTitle";
import Birdbg from "../assets/bird-bg.png"
import SponsorTag from "../components/SponsorTag";
import Footer from "../components/Footer";
import Avabg from '../assets/Ava-background.png'
import newbg from '../assets/newbg.png';
import kv from '../assets/season13/HOMEPAGE/MASCOT_KV.png';
import num from '../assets/season13/SPONSORS/8.jpg';
import land from '../assets/season13/SPONSORS/land_bit.png';
import sponsor from '../assets/season13/SPONSORS/sponsors.png';

const Sponsor = ({hideFooter = false}) => {

    const [sponsorData, setSponsorData] = useState(sponsorLogo());
    const handleTagClick = (sponsorYear) => {
        let updateSponsorData = sponsorData.map(sps => {
            if (sps.year === sponsorYear) {
                return { ...sps, isActive: true };
            } else {
                return { ...sps, isActive: false };
            }
        })

        setSponsorData(updateSponsorData)
    }
    return (
        <div className="relative" style={{ minHeight: "180vh", position: "relative" }}>
      
      <section
        className="relative z-[1] min-h-[180vh] text-center text-tertiary-300 overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <div
  className="absolute inset-0 -z-10"
  style={{
    backgroundImage: `url(${num.src})`,
    backgroundSize: "450px 1500px", 
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center ",
    transform: "rotate(90deg) scale(3)", 
    transformOrigin: "center",
    width: "100%",
    height: "60%",
  }}
/>

        {/* Top Title Section */}
        <div className="flex items-center justify-center gap-2 pt-10 pb-5 z-10 relative mt-[70px]">
          <img
            src={kv.src}
            alt="mascot"
            className="h-[100px] w-auto object-contain"
          />
          <h1 className="text-tertiary-400 font-bold text-display-64 text-white">SPONSORS</h1>
        </div>

        {/* Sponsor PNG */}
        <div className="relative w-full mt-10">
          <img
            src={sponsor.src}
            alt="sponsors banner"
            className="relative z-20 opacity-[90%] w-[350px] md:w-[500px] left-[33%] pt-[50px] scale-[200%] object-contain mt-5"
          />
        </div>

        <h2 className="text-yellow-300 text-headline-48 md:text-4xl font-semibold relative z-30 mt-40 text-center mx-auto w-[80%]">
          Stay tuned for<br />this season's sponsor!
        </h2>

        <div className="relative w-full mt-[260px]">
          <img
            src={land.src}
            alt="land decoration"
            className="absolute z-0 w-full left-[50px] object-cover scale-[140%]"
            style={{ bottom: 0 }}
          />
        </div>
      </section>

                 {!hideFooter && <Footer />}
    </div>
    );
};

export default Sponsor;
