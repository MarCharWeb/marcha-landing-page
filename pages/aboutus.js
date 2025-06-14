import PageTitle from "../components/PageTitle";
import { useRef } from "react";
import Footer from "../components/Footer";
import newbg from '../assets/newbg.png';
import React from "react";
import Carousel from "../components/carousel";
import Button from '../components/Button'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useState, useEffect } from 'react';
import land_ver1 from '../assets/season13/ABOUT US/land_ver1.png';
import road_full from '../assets/season13/HOMEPAGE/ROAD_FULL.png';
import kv from '../assets/season13/HOMEPAGE/MASCOT_KV.png';
import TeamCarousel from '../components/TeamCarousel.js';

const AboutUs = () => {

    const [buttonSize, setButtonSize] = useState('large');

    useEffect(() => {
        const updateButtonSize = () => {
        setButtonSize(window.innerWidth < 992 ? 'small' : 'large');
        };

        window.addEventListener('resize', updateButtonSize);
        updateButtonSize(); // Initialize on component mount

        return () => {
        window.removeEventListener('resize', updateButtonSize);
        };
    }, []);

    const heroBtn = useRef(null);
    useLayoutEffect(() => {
        gsap.from(heroTextRef.current, {
        opacity: 0,
        duration: 2,
        ease: "bounce.out",
        autoAlpha: 0,
        delay: 1,
        });
    }, []);

    const heroTextRef = useRef(null);

    return (
        <main
        className="space-y-1 pt-16 min-h-screen"
      style={{
        backgroundColor: '#2D033F',
        zIndex: 2,
      }}
    >
      <section id='about-marketing-challengers' className=''>
        <div className="relative w-full py-32 bg-[#0a0f3c] text-center space-y-8">
          <h1 className="text-tertiary-300 text-5xl font-semibold mb-4" ref={heroTextRef}>ABOUT MARCHA</h1>
          <div
            className="absolute top-[47%] w-full h-[300px] z-10 scale-[380%]"
            style={{
              backgroundImage: `url(${land_ver1.src})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center bottom',
            }}
          ></div>
          
          <div
            className="absolute bottom-[23%] right-[30%] w-full h-[500px] z-[5] opacity-40 rotate-[200deg] scale-[80%]"
            style={{
              backgroundImage: `url(${road_full.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>
          
          <div className="mx-auto z-[10] space-y-20" style={{ width: '1200px' }}>
            <div className="border border-yellow-400 bg-[#9d29e5] p-6 rounded-lg text-left text-tertiary-300">
              <h3 className="text-lead-24 font-extrabold mb-4">MARKETING CHALLENGERS</h3>
              <p className="text-lg text-yellow-300">
                Marketing Challengers, established in 2009, is one of the leading nationwide Marketing and Communications competitions for undergraduate students in Vietnam, organized by RMIT Vietnam Business Club - SGS.
              </p>
            </div>
            
            <div className="border border-yellow-400 bg-[#9d29e5] p-6 rounded-lg text-left text-tertiary-300 z-[2]">
              <h3 className="text-lead-24 font-semibold mb-4 text-yellow-400">VISION</h3>
              <p className="text-lg text-yellow-400">
                Become a milestone in the self-affirmation journey of young Marketing enthusiasts, where they determine their next steps in the field.
              </p>
            </div>
            
            <div className="border border-yellow-400 bg-[#9d29e5] p-6 rounded-lg text-left text-tertiary-300 z-[2]">
              <h3 className="text-lead-24 font-semibold mb-4 text-yellow-400">MISSION</h3>
              <p className="text-lg text-yellow-400 mb-2">
                To empower Vietnamese undergraduates, no matter their background, with a real-world platform to craft Integrated Marketing Communication (IMC) Plans. We provide:
              </p>
              <ul className="list-disc list-inside text-yellow-400">
                <li>A hands-on platform to unleash creativity in a dynamic, supportive environment.</li>
                <li>The chance to pitch ideas directly to top-tier brands.</li>
                <li>Valuable feedback from leading industry experts to sharpen their skills and boost confidence.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative w-full py-32 bg-purple-900 text-center">
          <h1 className="text-4xl font-bold mb-16 text-yellow-400" style={{ display: 'block' }}>OUR TEAM</h1>
          <TeamCarousel />
          <div className="relative w-full bottomx rotate-[2deg] -mt-[350px] pointer-events-none">
  {/* Road image as a full-width layout */}
  <img
    src={road_full.src}
    alt="road background"
    className="w-full object-cover"
    style={{
      zIndex: 0,
      position: 'relative',
    }}
  />

  {/* Mascot image absolutely positioned above the road */}
  <img
    src={kv.src}
    alt="mascot"
    className="absolute bottom-[20%] left-[10%] h-[350px] z-10 object-contain pointer-events-none"
  />
</div>
        </div>
        
      </section>
      
            <Footer></Footer>
        </main>
    );
};

export default AboutUs;
