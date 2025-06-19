import { FaTiktok } from "react-icons/fa";
import face from '../assets/season13/CONTACT/face.png';
import link from '../assets/season13/CONTACT/link.png';
import spot from '../assets/season13/CONTACT/spot.png';
import tik from '../assets/season13/CONTACT/tik.png';

const Footer = () => {
  return (
    <div id="footer"
      style={{
        position: "relative",
        zIndex: 100,
        backgroundColor: "transparent", 
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <section className="px-4 sm:px-6 py-8 text-white bg-transparent text-xs sm:text-button-21 lg:text-base space-y-8">
  <h2 className="text-tertiary-300 text-2xl text-headline-37 uppercase tracking-wide">
    CONTACT US
  </h2> 
  <div className="flex flex-col xl:flex-row justify-between w-full gap-10">
    {/* Contact Information */}
    <div className="w-full xl:w-1/2">
      <h3 className="text-[#FBBE18] text-headline-31 text-lg mb-2">CONTACT INFORMATION</h3>
      <ul className="space-y-1">
  <li className="flex items-start">
    <span className="w-4 h-4 mt-1.5 mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
    <span className="text-white">Contact: rmitbcmarketingchallengers@gmail.com</span>
  </li>
  <li className="flex items-start">
    <span className="w-4 h-4 mt-1.5 mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
    <span className="text-white">Sponsor Partnership: marketingchallengers.sponsor@gmail.com</span>
  </li>
  <li className="flex items-start">
    <span className="w-4 h-4 mt-1.5 mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
    <span className="text-white">Media Partnership: marketingchallengers.media@gmail.com</span>
  </li>
</ul>
    </div>

    {/* Hotline */}
    <div className="w-full xl:w-1/2">
      <h3 className="text-[#FBBE18] text-headline-31 text-lg mb-2">HOTLINE</h3>
      <ul className="space-y-1">
         <li className="flex items-start">
    <span className="w-4 h-4 mt-1.5 mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
    <span className="text-white">Project Leader: (+84) 836876199 (Mr. Ngọc Thiên)</span>
  </li>
         <li className="flex items-start">
    <span className="w-4 h-4 mt-1.5 mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
    <span className="text-white">Media Leader: (+84) 961300014 (Ms. Hương Nguyên)</span>
  </li>
      </ul>
    </div>
  </div>

  {/* Second Row: Location + Socials */}
  <div className="flex flex-col xl:flex-row justify-between w-full gap-10">
    {/* Location */}
    <div className="w-full xl:w-1/2">
      <h3 className="text-[#FBBE18]  text-headline-31 text-lg mb-2">LOCATION</h3>
      <p className="flex items-start">
        <li className="flex items-start">
    <span className="w-4 h-4 mt-1.5 mr-2 rounded-sm shrink-0 bg-gradient-to-br from-[#93089f] to-[#bb5cba]"></span>
    <span className="text-white">RMIT Vietnam University - Saigon South Campus, 701 Nguyen Van Linh Street, District 7. HCMC</span>
  </li>
      </p>
    </div>

    {/* Social Icons */}
    <div className="w-full xl:w-1/2">
      <h3 className="text-[#FBBE18]  text-headline-31 text-lg mb-2">FOLLOW US ON</h3>
<div className="flex flex-wrap justify-start gap-6 sm:gap-8 mt-2">
  {/* Facebook Fanpage */}
  <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
    <img src="/season13/CONTACT/face.png" alt="Facebook" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
    <span className="text-xs mt-1">Facebook<br />Fanpage</span>
  </a>

  {/* Facebook Group */}
  <a href="https://bit.ly/MarChaFacebookGroup" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
    <img src="/season13/CONTACT/face.png" alt="Facebook Group" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
    <span className="text-xs mt-1">Facebook<br />Group</span>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
    <img src="/season13/CONTACT/link.png" alt="LinkedIn" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
    <span className="text-xs mt-1">LinkedIn</span>
  </a>

  {/* Spotify */}
  <a href="https://open.spotify.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
    <img src="/season13/CONTACT/spot.png" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
    <span className="text-xs mt-1">Spotify</span>
  </a>

  {/* TikTok */}
  <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center text-center">
    <img src="/season13/CONTACT/tik.png" alt="TikTok" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#93089f] to-[#bb5cba] object-contain" />
    <span className="text-xs mt-1">TikTok</span>
  </a>
</div>
    </div>
  </div>
</section>
</div>
  );
};

export default Footer;
