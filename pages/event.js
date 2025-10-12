import Footer from "../components/Footer";

const Event = ({ hideFooter = false }) => {
  return (
    <div className="relative" style={{ position: "relative" }}>
      <section
        className="relative z-[1] w-full overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="relative w-full"
          style={{
            backgroundImage: `url(/season13/IMAGE/EVENT.png)`,
            backgroundSize: "100vw auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            width: "100vw",
            paddingBottom: "0%", 
          }}
        >
          <img
            src="/season13/IMAGE/EVENT.png"
            alt="sponsorship background"
            className="w-screen h-auto object-contain"
            style={{ objectFit: "contain", display: "block" }}
          />
        </div>
      </section>
{!hideFooter && (
    // <div className="absolute bottom-0 w-full bg-transparent z-[10]">
      <Footer />
    // {/* </div> */}
  )}

    </div>
  );
};

export default Event;