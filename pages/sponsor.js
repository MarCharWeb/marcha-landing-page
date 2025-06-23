import Footer from "../components/Footer";

const Sponsor = ({ hideFooter = false }) => {
  return (
    <div className="relative" style={{ position: "relative" }}>
      <section
        className="relative z-[1] w-full overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="relative w-full"
          style={{
            backgroundImage: `url(/season13/IMAGE/SPONSORSHIP1.svg)`,
            backgroundSize: "100vw auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            width: "100vw",
            paddingBottom: "0%", // Adjust this based on SVG's aspect ratio (height/width)
          }}
        >
          <img
            src="/season13/IMAGE/SPONSORSHIP1.svg"
            alt="sponsorship background"
            className="w-screen h-auto object-contain"
            style={{ objectFit: "contain", display: "block" }}
          />
        </div>
      </section>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default Sponsor;