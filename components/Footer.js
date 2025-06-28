import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer"
      style={{
        position: "relative",
        zIndex: 100,
        backgroundColor: "transparent",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <section className="px-4 sm:px-6 py-8 text-white bg-transparent text-[10px] md:text-[12px] lg:text-base space-y-6 lg:space-y-8">
        <h2 className="text-tertiary-300 text-[18px] md:text-[22px] lg:text-2xl lg:text-headline-37 uppercase tracking-wide">
          CONTACT US
        </h2>
        <div className="flex flex-row flex-nowrap justify-between w-full gap-4 sm:gap-6 lg:gap-10">
          {/* Contact Information */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[#FBBE18] text-[14px] md:text-[16px] lg:text-lg lg:text-headline-31 mb-1 lg:mb-2">CONTACT INFORMATION</h3>
            <ul className="space-y-0.5 lg:space-y-1">
              <li className="flex items-start">
                <span className="w-3 h-3 lg:w-4 lg:h-4 mt-1 mr-1.5 lg:mt-1.5 lg:mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
                <span className="text-white text-tiny-10 md:text-small-16  lg:text-lead-24 break-all">Contact: rmitbcmarketingchallengers@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 lg:w-4 lg:h-4 mt-1 mr-1.5 lg:mt-1.5 lg:mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
                <span className="text-white text-tiny-10 md:text-small-16  lg:text-lead-24 break-all">Sponsor Partnership: marketingchallengers.sponsor@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 lg:w-4 lg:h-4 mt-1 mr-1.5 lg:mt-1.5 lg:mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
                <span className="text-white text-tiny-10 md:text-small-16  lg:text-lead-24 break-all">Media Partnership: marketingchallengers.media@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hotline */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[#FBBE18] text-[14px] md:text-[16px] lg:text-lg lg:text-headline-31 mb-1 lg:mb-2">HOTLINE</h3>
            <ul className="space-y-0.5 lg:space-y-1">
              <li className="flex items-start">
                <span className="w-3 h-3 lg:w-4 lg:h-4 mt-1 mr-1.5 lg:mt-1.5 lg:mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
                <span className="text-white text-tiny-10 md:text-small-16  lg:text-lead-24 break-all">Project Leader: (+84) 836876199 (Mr. Ngọc Thiên)</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 lg:w-4 lg:h-4 mt-1 mr-1.5 lg:mt-1.5 lg:mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
                <span className="text-white text-tiny-10 md:text-small-16  lg:text-lead-24 break-all">Media Leader: (+84) 961300014 (Ms. Hương Nguyên)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row: Location + Socials */}
        <div className="flex flex-row flex-nowrap justify-between w-full gap-4 sm:gap-6 lg:gap-10">
          {/* Location */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[#FBBE18] text-[14px] md:text-[16px] lg:text-lg lg:text-headline-31 mb-1 lg:mb-2">LOCATION</h3>
            <p className="flex items-start">
              <span className="w-3 h-3 lg:w-4 lg:h-4 mt-1 mr-1.5 lg:mt-1.5 lg:mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
              <span className="text-white text-tiny-10 md:text-small-16 lg:text-lead-24 break-all">RMIT Vietnam University - Saigon South Campus, 701 Nguyen Van Linh Street, District 7. HCMC</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[#FBBE18] text-[14px] md:text-[16px] lg:text-lg lg:text-headline-31 mb-1 lg:mb-2">FOLLOW US ON</h3>
            <div className="flex flex-wrap justify-start gap-4 sm:gap-6 lg:gap-8 mt-1 lg:mt-2">
              {/* Facebook Fanpage */}
              <a href="https://www.facebook.com/marketing.challengers" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
                <img src="/season13/CONTACT/face.png" alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
                <span className="text-tiny-10 md:text-small-16 lg:text-headline-21 mt-0.5 lg:mt-1">Facebook<br />Fanpage</span>
              </a>

              {/* Facebook Group */}
              <a href="https://www.facebook.com/groups/marketingchallengers" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
                <img src="/season13/CONTACT/face.png" alt="Facebook Group" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
                <span className="text-tiny-10 md:text-small-16 lg:text-headline-21 mt-0.5 lg:mt-1">Facebook<br />Group</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/marketing-challengers/" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
                <img src="/season13/CONTACT/link.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
                <span className="text-tiny-10 md:text-small-16 lg:text-headline-21 mt-0.5 lg:mt-1">LinkedIn</span>
              </a>

              {/* Spotify */}
              <a href="https://open.spotify.com/show/2Z04Hb6Ate8xan1p9fALZO" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
                <img src="/season13/CONTACT/spot.png" alt="Spotify" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
                <span className="text-tiny-10 md:text-small-16 lg:text-headline-21 mt-0.5 lg:mt-1">Spotify</span>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@marketingchallengers" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
                <img src="/season13/CONTACT/tik.png" alt="TikTok" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
                <span className="text-tiny-10 md:text-small-16 lg:text-headline-21 mt-0.5 lg:mt-1">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;