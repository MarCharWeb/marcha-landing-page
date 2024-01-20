import PageTitle from "../components/PageTitle";
import { useRouter } from 'next/router';
import Bg from "../assets/bg.png"
import ImageHolder from "../components/ImageHolder";
import { useRef } from "react";
import HeroText from '../assets/hero-text.png'
import Footer from "../components/Footer";
import Avabg from '../assets/Ava-background.png'
import Aboutus1 from '../assets/aboutus1.png'
import Aboutus2 from '../assets/aboutus2.png'
import Aboutus3 from '../assets/aboutus3.png'
import Aboutus4 from '../assets/aboutus4.png'


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
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong -mt-28 text-center pt-10 sm:text-xm' style={{ zIndex: 2 }}>Vision</h4>
                            <p className='text-center font-bold text-headline-31'>To become the best student-run marketing competition for students.</p>
                        </div>

                        <div className='pl-4 space-y-0 lg:space-y-1 xl:space-y-2.5'>
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong pt-4 text-center'>Mission</h4>
                            <p className='text-center font-bold lg:px-36 text-headline-31'>To provide students, regardless of their marketing foundation, a practical playground to develop an Integrated Marketing Communication (IMC) Plan and an opportunity to pitch their ideas to real famous client brands.</p>
                        </div>

                        <div className='mt-40 '>
                            <PageTitle className="mt-64 hidden md:flex items-center justify-center" title={'SEASON 11 MILESTONES'}></PageTitle>
                        </div>
                        <div className="hidden md:flex w-full h-96 -mt-28" style={{
                                    backgroundImage: `url(${Aboutus1.src}),url(${Aboutus2.src})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '50% 100%',
                                    backgroundPosition: '10% 100%,90% 0%',
                                    zIndex: '1',
                                }}>
                        </div>
                        <div className="hidden md:flex w-full h-96 -mt-40" style={{
                                    backgroundImage: `url(${Aboutus3.src}),url(${Aboutus4.src})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '50% 100%',
                                    backgroundPosition: '10% 0%,90% 100%',
                                    zIndex: '1',
                                }}>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default AboutUs;
