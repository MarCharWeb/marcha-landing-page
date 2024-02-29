import PageTitle from "../components/PageTitle";
import { useRouter } from 'next/router';
import ImageHolder from "../components/ImageHolder";
import { useRef } from "react";
import HeroText from '../assets/spark.png'
import Footer from "../components/Footer";
import Aboutus1 from '../assets/aboutus1.png'
import Aboutus2 from '../assets/aboutus2.png'
import Aboutus3 from '../assets/aboutus3.png'
import Aboutus4 from '../assets/aboutus4.png'
import newbg from '../assets/newbg.png';


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
                        <ImageHolder
                            ref={heroTextRef}
                            priority={true}
                            src={HeroText}
                            alt="marketing-challengers-ss11-slogan"
                            className='mx-auto xl:mt-10 w-72 h-72 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px] transform -translate-y-10 lg:-translate-y-18 xl:-translate-y-20 pt-20'
                        ></ImageHolder>

                        <div className='pl-4 space-y-0 lg:space-y-1'>
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong -mt-28 text-center pt-10 sm:text-xm' style={{ zIndex: 2 }}>Vision</h4>
                            <p className='text-center text-headline-31'>To become the best student-run marketing competition for students.</p>
                        </div>

                        <div className='pl-4 space-y-0 lg:space-y-1 xl:space-y-2.5'>
                            <h4 className='font-bold text-headline-31 lg:text-headline-48 text-glow-strong pt-4 text-center'>Mission</h4>
                            <p className='text-center lg:px-48 text-headline-31'>To provide students, regardless of their marketing foundation, a practical playground to develop an Integrated Marketing Communication (IMC) Plan and an opportunity to pitch their ideas to real famous client brands.</p>
                        </div>

                        <div className='mt-40 '>
                            <PageTitle className="mt-64 hidden md:flex items-center justify-center" title={'SEASON 11 MILESTONES'}></PageTitle>
                        </div>
                        <div  className="flex justify-between pt-8">
                            <div style={{ backgroundColor: 'rgba(61, 6, 125, 0.6)' }} className='bg-transparent mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <PageTitle title={'1100+'} className="pb-4"></PageTitle>
                                    <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">REGISTRATIONS</span>
                                </div>
                            </div>

                            <div style={{ backgroundColor: 'rgba(61, 6, 125, 0.6)' }} className='bg-transparent mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <PageTitle title={'210+'} className="pb-4"></PageTitle>
                                    <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">TEAMS</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between py-8 ">
                            <div style={{ backgroundColor: 'rgba(61, 6, 125, 0.6)' }} className='bg-transparent mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                                <div className="text-center">
                                    <PageTitle title={'30+'} className="pb-4"></PageTitle>
                                    <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">UNIVERSITIES</span>
                                </div>
                            </div>

                            <div style={{ backgroundColor: 'rgba(61, 6, 125, 0.6)' }} className='bg-transparent mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
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
