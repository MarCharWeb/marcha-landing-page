import PageTitle from "../components/PageTitle";
import { useRouter } from 'next/router';
import Bg from "../assets/bg.png"
import ImageHolder from "../components/ImageHolder";
import { useRef } from "react";
import HeroText from '../assets/hero-text.png'
import Lighting from "../assets/lighting.png"
import Footer from "../components/Footer";
import Avabg from '../assets/Ava-background.png'

const AboutUs = () => {
    const router = useRouter();

    const heroTextRef = useRef(null);

    return (
        <main className="space-y-1"


            style={{
                backgroundImage: `url(${Avabg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '0% 0%',
                zIndex: 2,
            }}>
            <section id='about-marketing-challengers' className='pt-20' >

                {/* Glow Effect in background  */}
                {/* <svg className='absolute top-0 right-0 transform -translate-y-1/2' width="700" height="1400" viewBox="0 0 700 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_232_2027)">
            <rect x="500" y="500" width="400" height="400" rx="200" fill="#F49402"/>
            <rect x="500.5" y="500.5" width="399" height="399" rx="199.5" stroke="#7751A4"/>
            </g>
            <defs>
            <filter id="filter0_f_232_2027" x="0" y="0" width="1400" height="1400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_232_2027"/>
            </filter>
            </defs>
            </svg> */}

                <div className='bg-right-top'
                    style={{
                        backgroundImage: `url(${Bg.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '110% 58%',
                        backgroundPosition: '40% 0%',
                        zIndex: 1,
                    }}>

                    <div>
                        <PageTitle className='' title="ABOUT US"></PageTitle>
                        <ImageHolder ref={heroTextRef} priority={true} src={HeroText} alt="marketing-challengers-ss11-slogan" className={'mx-auto xl:mt-10 w-56 h-56 lg:w-64 lg:h-64 xl:w-[350px] xl:h-[350px] transform -translate-y-10 lg:-translate-y-18 xl:-translate-y-20 pt-2'}></ImageHolder>

                        <div className='pl-4 space-y-0 lg:space-y-1'>
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong -mt-28 text-center pt-10' style={{ zIndex: 2 }}>Vision</h4>
                            <p className='text-center font-bold text-headline-31'>To become the best student-run marketing competition for students.</p>
                        </div>

                        <div className='pl-4 space-y-0 lg:space-y-1 xl:space-y-2.5'>
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong pt-4 text-center'>Mission</h4>
                            <p className='text-center font-bold lg:px-36 text-headline-31'>To provide students, regardless of their marketing foundation, a practical playground to develop an Integrated Marketing Communication (IMC) Plan and an opportunity to pitch their ideas to real famous client brands.</p>
                        </div>

                        <div className='mt-40 '>
                            <PageTitle className="mt-64" title={'SEASON 11 MILESTONES'}></PageTitle>
                        </div>
                        {/* <section className="hidden lg:flex text-center pt-10 flex relative z-[5] flex-col xl:text-center items-start justify-between gap-4 pt-6 lg:items-end lg:flex-row text-small-16 md:text-headline-21 xl:pt-12 container-media-padding" style={{
                                    backgroundImage: `url(${Lighting.src}),url(${Lighting.src}),url(${Lighting.src}),url(${Lighting.src})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '40% 50%',
                                    backgroundPosition: '26% 100%, 26% 17%, 73% 100%, 73% 17%',
                                    zIndex: '0',
                                }}>
                            <div className='w-full h-full absolute bottom-0 left-0 bg-bottom -mb-24'
                                
                            ></div>

                            <div className=''>
                                <p className="pl-56 pb-10 text-small-16 pt-10">
                                    <span className="font-bold text-headline-48 lg:text-display-48 text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] leading-10 lg:text-glow-strong "> &#62; 1100 <br className="xl:appear" /> REGISTRATIONS</span>
                                </p>
                                <p className="pl-56 pt-10 text-small-16 mb-10">
                                    <span className="font-bold text-headline-48 lg:text-display-48 text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] leading-10 lg:text-glow-strong"> &#62; 30 <br className="xl:appear" /> UNIVERSITIES</span>
                                </p>
                            </div>

                            <div className="flex flex-col xl:text-center gap-0.5">
                                <p className="pr-56 pb-10  text-small-16">
                                    <span className="font-bold text-headline-48 lg:text-display-48 text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] leading-10 lg:text-glow-strong">&#62; 210 <br className="xl:appear" /> TEAMS</span>
                                </p>
                                <p className="pr-56 pt-10 text-small-16 mb-10">
                                    <span className="font-bold text-headline-48 lg:text-display-48 text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] leading-10 lg:text-glow-strong">&#62; 32000 <br className="xl:appear" /> FB FOLLOWERS</span>
                                </p>
                            </div>
                        </section> */}
                        <section className="text-center pt-10 flex relative z-[5]flex-row xl:text-center items-start justify-between gap-4 pt-6 lg:items-end lg:flex-row text-small-16 md:text-headline-21 xl:pt-12 container-media-padding" style={{
                                    backgroundImage: `url(${Lighting.src}),url(${Lighting.src}),url(${Lighting.src}),url(${Lighting.src})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '60% 60%',
                                    backgroundPosition: '-12% 98%, -12% -35%, 110% 98%, 110% -35%',
                                    zIndex: '1',
                                }}>
                            <div className='w-1/2'>
                                <p className="pb-10 text-small-16 ">
                                    <span className="font-bold text-headline-48 lg:text-display-48 text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] leading-10 text-glow-strong "> &#62; 1100 <br className="xl:appear" /> REGISTRATIONS</span>
                                </p>
                                <p className="pt-10 text-small-16 mb-10">
                                    <span className="font-bold text-headline-48 lg:text-display-48 text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] leading-10 text-glow-strong"> &#62; 30 <br className="xl:appear" /> UNIVERSITIES</span>
                                </p>
                            </div>

                            <div className="w-1/2 flex flex-col xl:text-center gap-0.5">
                                <p className="pb-10 text-small-16">
                                    <span className="font-bold text-headline-48 lg:text-display-48 text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] leading-10 text-glow-strong">&#62; 210 <br className="xl:appear" /> TEAMS</span>
                                </p>
                                <p className="pt-10 text-small-16 mb-10">
                                    <span className="font-bold text-headline-48 lg:text-display-48 text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] leading-10 text-glow-strong">&#62; 32000 <br className="xl:appear" /> FB FOLLOWERS</span>
                                </p>
                            </div>
                        </section>
                    </div>




                </div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default AboutUs;
