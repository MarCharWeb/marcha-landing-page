import React from 'react';
import { useRouter } from 'next/router';
import Footer from "../components/Footer";

const Terms = () => {
  const router = useRouter();

  return (
    <div className="relative" style={{ position: "relative" }}>
      <section
        className="relative z-[1] w-full overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="relative w-full"
          style={{
            backgroundImage: `url(/season13/IMAGE/HOME3.png)`,
            backgroundSize: "100vw auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            width: "100vw",
            paddingBottom: "0%",
          }}
        >
          <img
            src="/season13/IMA  `E/HOME3.png"
            alt="terms background"
            className="w-screen h-auto object-contain"
            style={{ objectFit: "contain", display: "block" }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
          <button
            onClick={() => router.push('/rules')}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-[#693eb2] border-2 border-yellow-400 text-tertiary-300 font-semibold rounded-full w-[70vw] min-w-[200px] max-w-[900px] text-base sm:text-lg hover:scale-105 transition-transform duration-300"
          >
            EXPLORE MORE
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default Terms;