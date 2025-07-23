import Footer from "../components/Footer";

const Rules = ({ hideFooter = false }) => {
  return (
    <div className="relative" style={{ position: "relative" }}>
      <section
        className="relative z-[1] w-full overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="relative w-full"
          style={{
            backgroundImage: `url(/season13/IMAGE/TERMS & CONDITIONS.png)`,
            backgroundSize: "100vw auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            width: "100vw",
            paddingBottom: "0%", 
          }}
        >
          <img
            src="/season13/IMAGE/TERMS & CONDITIONS.png"
            alt="terms and conditions background"
            className="w-screen h-auto object-contain"
            style={{ objectFit: "contain", display: "block" }}
          />
        </div>
      </section>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default Rules;