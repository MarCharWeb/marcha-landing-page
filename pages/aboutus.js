import PageTitle from "../components/PageTitle";
import { useRef } from "react";
import Footer from "../components/Footer";
import newbg from '../assets/newbg.png';
import React from "react";
import Carousel from "../components/carousel";
import Button from '../components/Button';
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useState, useEffect } from 'react';
import TeamCarousel from '../components/TeamCarousel.js';

const AboutUs = ({ hideFooter = false }) => {
  const [buttonSize, setButtonSize] = useState('large');

  useEffect(() => {
    const updateButtonSize = () => {
      setButtonSize(window.innerWidth < 992 ? 'small' : 'large');
    };

    window.addEventListener('resize', updateButtonSize);
    updateButtonSize();

    return () => {
      window.removeEventListener('resize', updateButtonSize);
    };
  }, []);

  const heroTextRef = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.from(heroTextRef.current, {
  //     opacity: 0,
  //     duration: 0.1,
  //     ease: "bounce.out",
  //     autoAlpha: 0,
  //     delay: 1,
  //   });
  // }, []);

  return (
    <main
      className="space-y-1 pt-[8vh] min-h-screen"
      style={{
        backgroundColor: '#2D033F',
        zIndex: 2,
      }}
    >
      <section id="about-marketing-challengers" className="">
        <div className="relative w-full  bg-[#2d033f] text-center space-y-[2vh] md:space-y-[4vh]">
          <h1
            className="text-tertiary-300 text-[6vw] sm:text-[5vw] pb-10 md:text-[4vw] font-semibold mb-[2vh] px-[4vw]"
            ref={heroTextRef}
          >
            ABOUT MARCHA
          </h1>
          <div
            className="absolute top-[11%] left-[-40%] w-full h-[20vh] sm:h-[30vh] md:h-[40vh] z-0 opacity-20 rotate-[200deg] scale-[50%] sm:scale-[60%] md:scale-[80%]"
            style={{
              backgroundImage: `url("/season13/HOMEPAGE/ROAD_FULL.png")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>
          
          <div className="mx-auto z-10 space-y-[4vh] gap-4 sm:px-[3vw] md:px-[2vw] max-w-[95vw] sm:max-w-[85vw] md:max-w-[90vw]">
            <div className="border border-yellow-400 bg-[#9d29e5] p-[3vw] sm:p-[4vw] md:p-[2vw] rounded-lg text-left text-tertiary-300">
              <h3 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] mb-[1vh] sm:mb-[2vh]">MARKETING CHALLENGERS</h3>
              <p className="text-[3vw] sm:text-[2.5vw] md:text-[1.8vw] text-yellow-300">
                Marketing Challengers, established in 2009, is one of the leading nationwide Marketing and Communications competitions for undergraduate students in Vietnam, organized by RMIT Vietnam Business Club - SGS.
              </p>
            </div>
            
            <div className="border border-yellow-400 bg-[#9d29e5] p-[3vw] sm:p-[4vw] md:p-[2vw] rounded-lg text-left text-tertiary-300 z-2">
              <h3 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] mb-[1vh] sm:mb-[2vh] text-yellow-400">VISION</h3>
              <p className="text-[3vw] sm:text-[2.5vw] md:text-[1.8vw] text-yellow-400">
                Become a milestone in the self-affirmation journey of young Marketing enthusiasts, where they determine their next steps in the field.
              </p>
            </div>
            <div className="relative">
            <div className="border border-yellow-400 bg-[#9d29e5] p-[3vw] sm:p-[4vw] md:p-[2vw] rounded-lg text-left text-tertiary-300 z-[2]">
              <h3 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] mb-[1vh] sm:mb-[2vh] text-yellow-400">MISSION</h3>
              <p className="text-[3vw] sm:text-[2.5vw] md:text-[1.8vw] text-yellow-400 mb-[1vh]">
                To empower Vietnamese undergraduates, no matter their background, with a real-world platform to craft Integrated Marketing Communication (IMC) Plans. We provide:
              </p>
              <ul className="list-disc list-inside text-yellow-400 text-[3vw] sm:text-[2.5vw] md:text-[1.8vw]">
                <li>A hands-on platform to unleash creativity in a dynamic, supportive environment.</li>
                <li>The chance to pitch ideas directly to top-tier brands.</li>
                <li>Valuable feedback from leading industry experts to sharpen their skills and boost confidence.</li>
              </ul>
            </div>
            <div
            className="absolute z-20 w-full md:h-[80rem] pointer-events-none h-[40rem] opacity-80 translate-x-[-50%] left-[50%] scale-[120%] bottom-[-100px] md:bottom-[-150px]"
            style={{
              backgroundImage: `url("/season13/ABOUT US/land_ver1.png")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center bottom',
            }}
          ></div>
            </div>
            
          </div>
        </div>
        
        <div className="relative w-full py-32 bg-purple-900 text-center mt-20">
          <h1 className="text-4xl font-semibold text-headline-48 mb-16 pt-[20%] text-tertiary-300" style={{ display: 'block' }}>OUR TEAM</h1>
          <TeamCarousel />
          <div className="absolute bottom-[-20%] z-0 w-full rotate-[2deg] opacity-85 pointer-events-none">
            <img
              src="/season13/HOMEPAGE/ROAD_FULL.png"
              alt="road background"
              className="w-full scale-[110%] object-contain"
              style={{
                zIndex: 0,
                position: 'relative',
                height: 'auto',      
              }}
            />
            <img
              src="/season13/HOMEPAGE/MASCOT_KV.png"
              alt="mascot"
              className="absolute bottom-[20%] left-[5%] w-[40vw] sm:w-[30vw] md:w-[20vw] max-w-[200px] h-auto z-10 object-contain pointer-events-none"
            />
          </div>
        </div>
      </section>
      <div className="pt-[5%]">
      {!hideFooter && <Footer />}
      </div>
    </main>
  );
};

export default AboutUs;