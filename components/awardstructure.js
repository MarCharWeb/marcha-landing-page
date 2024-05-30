import PageTitle from "../components/PageTitle";
import { useRouter } from 'next/router';
import Trophy from '../assets/trophy.png'; // Import the image
import ImageHolder from "./ImageHolder";

const Awardstructure = () => {
    return (
        <main className="space-y-1 flex flex-col justify-center items-center h-screen pt-[500px]">
            <div className="flex flex-col items-center justify-center mt-60 sm:pt-0">
                <PageTitle title={'AWARD STRUCTURE'}></PageTitle>
                <ImageHolder src={Trophy} alt='marketing-challengers-season11-value' className={'w-[200px] h-[192px] xl:w-[277px] xl:h-[267px]'} ></ImageHolder>
            </div>
            <div className='hidden lg:flex bg-transparent mx-4 group lg:text-headline-31 relative lg:w-[400px] w-1/2 py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center w-full">
                    <div className="lg:pb-4">
                        <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">CHAMPION</span>
                    </div>
                    <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">250,000,000 VND</span>
                </div>
                <span style={{ width: '720px', left: '30%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md px-5">
                    <div className="w-full flex justify-center">
                        <span className="font-black text-[18px] text-glow-strong">CHAMPION</span>
                    </div>
                    <ul className="list-disc text-justify font-light text-[16px] leading-6">
                        <li><p>1 Electric Bike from MET EV per person.</p></li>
                        <li><p>1 Big Plus Full Size Box from CeraVe per person.</p></li>
                        <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                        <li><p>1 Three-month Membership Card from Fonos Audiobooks per person.</p></li>
                        <li><p>1 2-Day 1-Night Ticket for Resort Room at a MVillage Branch per person.</p></li>
                        <li><p>1 Experience Voucher for the Sustainable Happiness Competency Transformation Class from Harmony Hub per person.</p></li>
                        <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                        <li><p>1 L&apos;Usine Signature Tote Bag per person.</p></li>
                        <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                        <li><p>1 Three Piece Non-stick Ceramic Coated Cookware Set from Thien Nam Hoa Electronics per person.</p></li>
                        <li><p>Study Free 1 Course from the List of 13 Courses from Brands Vietnam per person.</p></li>
                        <div className="w-full items-center justify-center text-center">
                            <span className="">-----------------------------------------------------------------</span>
                        </div>
                        <li><p>1 Internship Opportunity from MET EV per person.</p></li>
                        <li><p>1 Internship Opportunity from TRUM Consultant per person.</p></li>
                        <li><p>1 Internship Opportunity from DNA Consulting per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Strategic Intern Position at Wisdom Agency per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                    </ul>
                </span>
            </div>

            <div className='lg:hidden bg-transparent mx-4 group lg:text-headline-31 relative lg:w-[400px] sm:w-1/2 md:w-1/3 py-10 border-2 border-yellow-500 rounded-md '>
                <div className="text-center">
                    <div className="lg:pb-4">
                        <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">CHAMPION</span>
                    </div>
                    <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">250,000,000 VND</span>
                </div>
                <span style={{ width: '350px', right: '-40%', top: '50%', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md px-5">
                    <div className="w-full flex justify-center">
                        <span className="font-black text-[18px] text-glow-strong">CHAMPION</span>
                    </div>
                    <ul className="list-disc text-justify font-light text-[13px] leading-4">
                        <li><p>1 Electric Bike from MET EV per person.</p></li>
                        <li><p>1 Big Plus Full Size Box from CeraVe per person.</p></li>
                        <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                        <li><p>1 Three-month Membership Card from Fonos Audiobooks per person.</p></li>
                        <li><p>1 2-Day 1-Night Ticket for Resort Room at a MVillage Branch per person.</p></li>
                        <li><p>1 Experience Voucher for the Sustainable Happiness Competency Transformation Class from Harmony Hub per person.</p></li>
                        <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                        <li><p>1 L&apos;Usine Signature Tote Bag per person.</p></li>
                        <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                        <li><p>1 Three Piece Non-stick Ceramic Coated Cookware Set from Thien Nam Hoa Electronics per person.</p></li>
                        <li><p>Study Free 1 Course from the List of 13 Courses from Brands Vietnam per person.</p></li>
                        <div className="w-full items-center justify-center text-center">
                            <span className="">-----------------------------------------------------------------</span>
                        </div>
                        <li><p>1 Internship Opportunity from MET EV per person.</p></li>
                        <li><p>1 Internship Opportunity from TRUM Consultant per person.</p></li>
                        <li><p>1 Internship Opportunity from DNA Consulting per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Strategic Intern Position at Wisdom Agency per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                    </ul>
                </span>
            </div>

            <div className='lg:hidden bg-transparent mx-4 group lg:text-headline-31 relative lg:w-[400px] sm:w-1/2 md:w-1/3 py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <div className="lg:pb-4">
                        <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest  text-glow-strong font-black">1ST <br></br>  RUNNER UP</span>
                    </div>
                    <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">120,000,000 VND</span>
                </div>
                <span style={{ width: '350px', right: '-40%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md px-5">
                    <div className="w-full flex justify-center">
                        <span className="font-black text-[18px] text-glow-strong">1ST RUNNER UP</span>
                    </div>
                    <ul className="list-disc text-justify font-light text-[13px] leading-4">
                        <li><p>1 Big Full Size Box from CeraVe per person.</p></li>
                        <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                        <li><p>1 Three-month Membership Card from Fonos Audiobooks per person.</p></li>
                        <li><p>1 Experience Voucher for the Sustainable Happiness Competency Transformation Class from Harmony Hub per person.</p></li>
                        <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                        <li><p>1 L&apos;Usine Signature Tote Bag per person.</p></li>
                        <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                        <li><p>1 Three Piece Non-stick Ceramic Coated Cookware Set from Thien Nam Hoa Electronics per person.</p></li>
                        <li><p>Study Free 1 Course from the List of 13 Courses from Brands Vietnam per person.</p></li>
                        <div className="w-full items-center justify-center text-center">
                            <span className="">-----------------------------------------------------------------</span>
                        </div>
                        <li><p>1 Internship Opportunity from MET EV per person.</p></li>
                        <li><p>1 Internship Opportunity from TRUM Consultant per person.</p></li>
                        <li><p>1 Internship Opportunity from DNA Consulting per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Strategic Intern Position at Wisdom Agency per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                    </ul>
                </span>
            </div>

            <div className='lg:hidden bg-transparent mx-4 group lg:text-headline-31 relative lg:w-[400px] sm:w-1/2 md:w-1/3 py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <div className="lg:pb-4">
                        <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest left text-glow-strong font-black">2ND  <br></br>  RUNNER UP</span>
                    </div>
                    <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">80,000,000 VND</span>
                </div>
                <span style={{ width: '350px', right: '-40%', top: '50%', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md px-5">
                    <div className="w-full flex justify-center">
                        <span className="font-black text-[18px] text-glow-strong">2ND RUNNER UP</span>
                    </div>
                    <ul className="list-disc text-justify font-light text-[13px] leading-4">
                        <li><p>1 Medium Full Size Box from CeraVe per person.</p></li>
                        <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                        <li><p>1 Three-month Membership Card from Fonos Audiobooks per person.</p></li>
                        <li><p>1 Experience Voucher for the Sustainable Happiness Competency Transformation Class from Harmony Hub per person.</p></li>
                        <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                        <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                        <li><p>Study Free 1 Course from the List of 13 Courses from Brands Vietnam per person.</p></li>
                        <div className="w-full items-center justify-center text-center">
                            <span className="">-----------------------------------------------------------------</span>
                        </div>
                        <li><p>1 Internship Opportunity from MET EV per person.</p></li>
                        <li><p>1 Internship Opportunity from TRUM Consultant per person.</p></li>
                        <li><p>1 Internship Opportunity from DNA Consulting per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Strategic Intern Position at Wisdom Agency per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                    </ul>
                </span>
            </div>

            <div className='lg:hidden bg-transparent mx-4 group lg:text-headline-31 relative lg:w-[400px] sm:w-1/2 md:w-1/3 py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <div className="lg:pb-4">
                        <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest left text-glow-strong font-black">TOP 8</span>
                    </div>
                    <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">80,000,000 VND</span>
                </div>
                <span style={{ width: '350px', right: '-40%', top: '50%', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md px-5">
                    <div className="w-full flex justify-center">
                        <span className="font-black text-[18px] text-glow-strong">TOP 8</span>

                    </div>
                    <ul className="list-disc text-justify font-light text-[13px] leading-4">
                        <li><p>1 Medium Full Size Box from CeraVe per person.</p></li>
                        <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                        <li><p>1 Three-month Membership Card from Fonos Audiobooks per person.</p></li>
                        <li><p>1 Experience Voucher for the Sustainable Happiness Competency Transformation Class from Harmony Hub per person.</p></li>
                        <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                        <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                        <div className="w-full items-center justify-center text-center">
                            <span className="">-----------------------------------------------------------------</span>
                        </div>
                        <li><p>1 Internship Opportunity from TRUM Consultant per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                    </ul>
                </span>
            </div>

            <div className='lg:hidden bg-transparent mx-4 group lg:text-headline-31 relative lg:w-[400px] sm:w-1/2 md:w-1/3 py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <div className="lg:pb-4">
                        <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest left text-glow-strong font-black">TOP 30</span>
                    </div>
                    <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">120,000,000 VND</span>
                </div>
                <span style={{ width: '300px', right: '-20%', top: '50%', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md px-5">
                    <div className="w-full flex justify-center">
                        <span className="font-black text-[18px] text-glow-strong">TOP 30</span>

                    </div>
                    <ul className="list-disc text-justify font-light text-[13px] leading-4">
                    <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                        <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                        <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                        <div className="w-full items-center justify-center text-center">
                            <span className="">-----------------------------------------------------------------</span>
                        </div>
                        <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                        <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                    </ul>
                </span>
            </div>

            <div className="hidden lg:flex lg:flex-row justify-between pt-8">
                <div className='bg-transparent mx-4 group text-headline-31 relative lg:w-[400px] w-1/2 py-10 border-2 border-yellow-500 rounded-md '>
                    <div className="text-center">
                        <div className="lg:pb-4">
                            <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">1ST <br></br> RUNNER UP</span>
                        </div>
                        <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">120,000,000 VND</span>
                    </div>
                    <span style={{ width: '720px', left: '50%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5 pb-5">
                        <div className="w-full flex justify-center">
                            <span className="font-black text-[18px] text-glow-strong">1ST RUNNER UP</span>
                        </div>
                        <ul className="list-disc text-justify font-light text-[16px] leading-6">
                            <li><p>1 Big Full Size Box from CeraVe per person.</p></li>
                            <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                            <li><p>1 Three-month Membership Card from Fonos Audiobooks per person.</p></li>
                            <li><p>1 Experience Voucher for the Sustainable Happiness Competency Transformation Class from Harmony Hub per person.</p></li>
                            <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                            <li><p>1 L&apos;Usine Signature Tote Bag per person.</p></li>
                            <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                            <li><p>1 Three Piece Non-stick Ceramic Coated Cookware Set from Thien Nam Hoa Electronics per person.</p></li>
                            <li><p>Study Free 1 Course from the List of 13 Courses from Brands Vietnam per person.</p></li>
                            <div className="w-full items-center justify-center text-center">
                                <span className="">-----------------------------------------------------------------</span>
                            </div>
                            <li><p>1 Internship Opportunity from MET EV per person.</p></li>
                            <li><p>1 Internship Opportunity from TRUM Consultant per person.</p></li>
                            <li><p>1 Internship Opportunity from DNA Consulting per person.</p></li>
                            <li><p>1 Shortcut Offer to Interview Round for Strategic Intern Position at Wisdom Agency per person.</p></li>
                            <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                            <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                        </ul>
                    </span>
                </div>

                <div className='bg-transparent mx-4 group text-headline-31 relative lg:w-[400px] w-1/2 py-10 border-2 border-yellow-500 rounded-md '>
                    <div className="text-center">
                        <div className="lg:pb-4">
                            <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">2ND <br></br> RUNNER UP</span>
                        </div>
                        <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">80,000,000 VND</span>
                    </div>
                    <span style={{ width: '720px', right: '50%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5 pb-5">
                        <div className="w-full flex justify-center">
                            <span className="font-black text-[18px] text-glow-strong">2ND RUNNER UP</span>
                        </div>
                        <ul className="list-disc text-justify font-light text-[16px] leading-6">
                            <li><p>1 Medium Full Size Box from CeraVe per person.</p></li>
                            <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                            <li><p>1 Three-month Membership Card from Fonos Audiobooks per person.</p></li>
                            <li><p>1 Experience Voucher for the Sustainable Happiness Competency Transformation Class from Harmony Hub per person.</p></li>
                            <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                            <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                            <li><p>Study Free 1 Course from the List of 13 Courses from Brands Vietnam per person.</p></li>
                            <div className="w-full items-center justify-center text-center">
                                <span className="">-----------------------------------------------------------------</span>
                            </div>
                            <li><p>1 Internship Opportunity from MET EV per person.</p></li>
                            <li><p>1 Internship Opportunity from TRUM Consultant per person.</p></li>
                            <li><p>1 Internship Opportunity from DNA Consulting per person.</p></li>
                            <li><p>1 Shortcut Offer to Interview Round for Strategic Intern Position at Wisdom Agency per person.</p></li>
                            <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                            <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="hidden lg:flex justify-between pt-8">
                <div className='bg-transparent mx-4 group text-headline-31 relative lg:w-[400px] w-1/2 py-10 border-2 border-yellow-500 rounded-md '>
                    <div className="text-center">
                        <div className="lg:pb-4">
                            <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">TOP 8</span>
                        </div>
                        <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">50,000,000 VND</span>
                    </div>
                    <span style={{ width: '720px', left: '50%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5 pb-5">
                        <div className="w-full flex justify-center">
                            <span className="font-black text-[18px] text-glow-strong">TOP 8</span>

                        </div>
                        <ul className="list-disc text-justify font-light text-[16px] leading-6">
                            <li><p>1 Medium Full Size Box from CeraVe per person.</p></li>
                            <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                            <li><p>1 Three-month Membership Card from Fonos Audiobooks per person.</p></li>
                            <li><p>1 Experience Voucher for the Sustainable Happiness Competency Transformation Class from Harmony Hub per person.</p></li>
                            <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                            <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                            <div className="w-full items-center justify-center text-center">
                                <span className="">-----------------------------------------------------------------</span>
                            </div>
                            <li><p>1 Internship Opportunity from TRUM Consultant per person.</p></li>
                            <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                            <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                        </ul>
                    </span>
                </div>

                <div className='bg-transparent mx-4 group text-headline-31 relative lg:w-[400px] w-1/2 py-10 border-2 border-yellow-500 rounded-md '>
                    <div className="text-center">
                        <div className="lg:pb-4">
                            <span className="text-[22px] lg:pb-4 lg:text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong font-black">TOP 30</span>
                        </div>
                        <span className="font-bold text-[#FFFFFF] text-[20px] lg:text-[40px] text-glow-strong">120,000,000 VND</span>
                    </div>
                    <span style={{ width: '500px', right: '50%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5 pb-5">
                        <div className="w-full flex justify-center">
                            <span className="font-black text-[18px] text-glow-strong">TOP 30</span>

                        </div>
                        <ul className="list-disc text-justify font-light text-[16px] leading-6">
                            <li><p>1 Dental Care Package from Singae Dental per person.</p></li>
                            <li><p>1 21-Day Experience Voucher from California Fitness & Yoga per person.</p></li>
                            <li><p>2 Boxes of Sachet Products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person.</p></li>
                            <div className="w-full items-center justify-center text-center">
                                <span className="">-----------------------------------------------------------------</span>
                            </div>
                            <li><p>1 Shortcut Offer to Interview Round for Marketing Trainee Position at MVillage per person.</p></li>
                            <li><p>1 Shortcut Offer to Interview Round for Executive Position at Kaya House per person.</p></li>
                        </ul>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default Awardstructure;
