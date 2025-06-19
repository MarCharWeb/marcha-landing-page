import React from 'react';
import kv from '../assets/season13/HOMEPAGE/MASCOT_KV.png';
import tach from '../assets/season13/HOMEPAGE/TÁCH.png';
import { useRouter } from 'next/router';

const Terms = () => {
  const router = useRouter();

  return (
    <div className="relative w-full py-8 md:py-12 lg:py-64 bg-[#2D033F] overflow-visible flex justify-center items-center min-h-[50vh]">
      {/* Left Tach Image */}
      <img
        src={tach.src}
        alt="left tach"
        className="absolute transform opacity-80 w-[50vw] min-w-[100px]  object-contain z-0 scale-150"
        style={{ left: '-27vw', top: '2vh', transformOrigin: 'center' }}
      />

      {/* Right Tach Image */}
      <img
        src={tach.src}
        alt="right tach"
        className="absolute transform opacity-80 w-[40vw] min-w-[100px] max-w-[750px] object-contain z-0 scale-150"
        style={{ right: '-20vw', top: '60%', transformOrigin: 'center' }}
      />

      {/* Center Content */}
      <div className="z-10 flex flex-col items-center space-y-8 md:space-y-14 max-w-4xl px-4 sm:px-6">
        <div className="relative w-full flex justify-center items-center">
          <h2 className="text-tertiary-300 text-headline-21 sm:text-headline-31 md:text-headline-37 lg:text-headline-48 font-bold whitespace-nowrap text-center z-10">
            TERMS & CONDITIONS
          </h2>
          <img
            src={kv.src}
            alt="mascot"
            className="absolute w-16 sm:w-20 md:w-24 lg:w-[120px] h-auto z-0"
            style={{
              left: '-10%',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </div>

        {/* Button */}
        <button
          onClick={() => router.push('/rules')}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-[#693eb2] border-2 border-yellow-400 text-tertiary-300 font-semibold rounded-full w-[70vw] min-w-[200px] max-w-[900px] text-base sm:text-lg hover:scale-105 transition-transform duration-300"
        >
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Terms;