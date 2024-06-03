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
      gsap.from(heroTextRef.current, { opacity: 0, duration: 2, ease: "bounce.out", autoAlpha: 0, delay: 1 })
  
  
    }, [])

    const heroTextRef = useRef(null);

    return (
        <main className="space-y-1 -mt-8 bg-fixed" style={{
            backgroundImage: `url(${newbg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',  // Adjust as per your requirement
            backgroundPosition: '0% 0%',
            zIndex: 2,
        }}
        >
            <section id='about-marketing-challengers' className='sm:pt-12 lg:pt-20' >

                <div className='bg-right-top'
                >
                    <div>
                        <PageTitle className='pt-10' title="ABOUT US"></PageTitle>
                        <Carousel></Carousel>

                        <div className='lg:pl-4 space-y-0 lg:space-y-1 pt-20 '>
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong -mt-28 text-center pt-10 text-[24px] lg:text-auto' style={{ zIndex: 2 }}>Vision</h4>
                            <p className='lg:px-24 text-center text-headline-31 text-[19px] lg:text-[30px] sm:mx-2'>Become a milestone in the self-affirmation journey of young Marketing lovers where they determine their next steps in the field.</p>
                        </div>

                        <div className='lg:pl-4 space-y-0 lg:space-y-1 xl:space-y-2.5'>
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong pt-4 text-center text-[24px] lg:text-auto'>Mission</h4>
                            <p className='text-center lg:px-24 text-headline-31 text-[19px] lg:text-[30px] sm:mx-2'>To provide students, regardless of their marketing foundation, a practical playground to develop an Integrated Marketing Communication (IMC) Plan and an opportunity to pitch their ideas to real famous client brands.</p>
                        </div>

                        <div className="flex justify-center items-center w-full mt-4">
                            <Button 
                              ref={heroBtn} 
                              onClick={() => {
                                window.open('https://drive.google.com/file/d/1n-cBvve8X_ZNyKfBA0OFWZ9oOhK26Ye_/view?fbclid=IwAR2hiO5MDx-4S_qtUCXy95LsUcxPHIaoAOAs-INb6i9UhgfPW8w0c8jtrhY', '_blank');
                              }} 
                              isGlow={true} 
                              type='primary' 
                              className='animate-bounce-slow font-bold' 
                              text={'MARCHA BOOKLET'} 
                              size = {buttonSize}>
                            </Button>
                        </div>
                        <div className='mt-12 lg:mt-32'>
                            <PageTitle className=" md:flex items-center justify-center" title={'SEASON 12 MILESTONES'}></PageTitle>
                        </div>
                        <div className="flex justify-center pt-8">
                            <div className='bg-transparent mx-4 group text-headline-31 relative lg:w-[400px] w-1/2 py-10 border-2 border-yellow-500 rounded-md '>
                                <div className="text-center">
                                    <span className="text-[24px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">&gt;700</span>
                                    <br></br>
                                    <span className="font-bold text-[#FFFFFF] lg:text-[40px] text-glow-strong text-[20px]">REGISTRATIONS</span>
                                </div>
                            </div>

                            <div className='bg-transparent mx-4 group text-headline-31 relative lg:w-[400px] w-1/2 py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <span className="text-[24px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">&gt;300</span>
                                    <br></br>
                                    <span className="font-bold text-[#FFFFFF] lg:text-[40px] text-glow-strong text-[20px]">TEAMS</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center py-8" >
                            <div className='bg-transparent mx-4 group text-headline-31 relative w-[400px] py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <span className="text-[24px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">&gt;60</span>
                                    <br></br>
                                    <span className="font-bold text-[#FFFFFF] lg:text-[40px] text-glow-strong text-[20px]">UNIVERSITIES</span>
                                </div>
                            </div>

                            <div className='bg-transparent mx-4 group text-headline-31 relative w-[400px] py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <span className="text-[24px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">&gt;35,000</span>
                                    <br></br>
                                    <span className="font-bold text-[#FFFFFF] lg:text-[40px] text-glow-strong text-[20px]">FOLLOWERS</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default AboutUs;
