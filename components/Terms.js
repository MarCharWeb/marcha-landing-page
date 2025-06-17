import React from 'react';
import kv from '../assets/season13/HOMEPAGE/MASCOT_KV.png';
import tach from '../assets/season13/HOMEPAGE/TÁCH.png';
import { useRouter } from 'next/router';

const Terms = () => {
  const router = useRouter();

  return (
    <div className="relative w-full py-[500px] bg-[#2D033F] overflow-visible flex justify-center items-center">

      <img
        src={tach.src}
        alt="left tach"
        className="absolute transform scale-[300%] opacity-[80%] w-[500px] object-contain z-0"
        style={{ left: '-260px', top: '35%' }}
      />

      <img
        src={tach.src}
        alt="right tach"
        className="absolute transform scale-[200%] opacity-[80%] w-[500px] object-contain z-0"
        style={{ right: '-220px', top: '75%' }}
      />

      {/* Center Content */}
      <div className="z-10 flex flex-col items-center space-y-14">
        <div className="relative w-full flex justify-center items-center">

          <h2 className="text-tertiary-300 text-4xl font-bold whitespace-nowrap text-center z-10">
            TERMS & CONDITIONS
          </h2>
          <img
            src={kv.src}
            alt="mascot"
            className="absolute left-[calc(50%-300px)] w-[120px] h-auto z-0"
          />
        </div>

        {/* Button */}
        <button
          onClick={() => router.push('/rules')}
          className="px-10 py-4 bg-purple-700 border-2 border-yellow-400 text-tertiary-300 font-semibold rounded-full w-[1000px] text-lg hover:scale-105 transition-transform duration-300"
        >
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Terms;
