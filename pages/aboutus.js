import PageTitle from "../components/PageTitle";
import { useRouter } from 'next/router';
import ImageHolder from "../components/ImageHolder";
import { useRef } from "react";
import HeroText from '../assets/spark.png';
import Footer from "../components/Footer";
import newbg from '../assets/newbg.png';
import React from "react";
import Carousel from "../components/carousel";

const AboutUs = () => {

    const router = useRouter();

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
            <section id='about-marketing-challengers' className='pt-20' >

                <div className='bg-right-top'
                >
                    <div>
                        <PageTitle className='pt-10' title="ABOUT US"></PageTitle>
                    <Carousel></Carousel>

                        <div className='pl-4 space-y-0 lg:space-y-1 pt-20'>
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong -mt-28 text-center pt-10 sm:text-xm' style={{ zIndex: 2 }}>Vision</h4>
                            <p className='text-center text-headline-31'>Become a milestone in the self-affirmation journey of young Marketing lovers where they determine their next steps in the field.</p>
                        </div>

                        <div className='pl-4 space-y-0 lg:space-y-1 xl:space-y-2.5'>
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong pt-4 text-center'>Mission</h4>
                            <p className='text-center lg:px-48 text-headline-31'> Build an insightful and interactive playground for contestants by providing the most modern Digital Marketing trends via various platforms.</p>
                        </div>

                        <div className='mt-40 '>
                            <PageTitle className="mt-64 hidden md:flex items-center justify-center" title={'SEASON 11 MILESTONES'}></PageTitle>
                        </div>
                        <div className="flex justify-center pt-8">
                            <div className='bg-transparent mx-4 group text-headline-31 relative w-[400px] py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <PageTitle title={'1100+'} className="pb-4"></PageTitle>
                                    <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">REGISTRATIONS</span>
                                </div>
                            </div>

                            <div className='bg-transparent mx-4 group text-headline-31 relative w-[400px] py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <PageTitle title={'210+'} className="pb-4"></PageTitle>
                                    <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">TEAMS</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center py-8" >
                            <div className='bg-transparent mx-4 group text-headline-31 relative w-[400px] py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <PageTitle title={'30+'} className="pb-4"></PageTitle>
                                    <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">UNIVERSITIES</span>
                                </div>
                            </div>

                            <div className='bg-transparent mx-4 group text-headline-31 relative w-[400px] py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <PageTitle title={'31000+'} className="pb-4"></PageTitle>
                                    <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">FOLLOWERS</span>
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
