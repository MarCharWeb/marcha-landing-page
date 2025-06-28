import Footer from "../components/Footer";
import TeamCarousel from "../components/TeamCarousel.js";

const AboutUs = ({ hideFooter = false }) => {
  return (
    <div className="relative" style={{ position: "relative" }}>
      <section
        className="relative z-[1] w-full overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="relative w-full"
          style={{
            backgroundImage: `url(/season13/IMAGE/ABOUT US.svg)`,
            backgroundSize: "100vw auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            width: "100vw",
            paddingBottom: "00%", 
          }}
        >
          <img
            src="/season13/IMAGE/ABOUT US.svg"
            alt="about us background"
            className="w-screen h-auto object-contain"
            style={{ objectFit: "contain", display: "block" }}
          />
        </div>
        <div
  className="absolute bottom-0 w-full text-center bg-transparent pb-0 md:pb-0 lg:pb-96 lg:bottom-10"
  style={{ zIndex: 2 }}
>
  <TeamCarousel />
</div>
      </section>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default AboutUs;