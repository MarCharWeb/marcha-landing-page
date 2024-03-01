import PageTitle from "../components/PageTitle";
import { useRouter } from 'next/router';
import Trophy from '../assets/trophy.png'; // Import the image
import ImageHolder from "./ImageHolder";

const Awardstructure = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/ourhuman');
    };

    return (
        <main className="space-y-1 flex flex-col justify-center items-center h-screen pt-[500px]">
            <div className="flex flex-col items-center justify-center pt-40 mt-40 sm:pt-0">
                <PageTitle title={'AWARD STRUCTURE'}></PageTitle>
                <ImageHolder src={Trophy} alt='marketing-challengers-season11-value' className={'w-[200px] h-[192px] xl:w-[277px] xl:h-[267px]'} ></ImageHolder>
            </div>
            <div className='bg-transparent group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <PageTitle title={'CHAMPION'} className="pb-4"></PageTitle>
                    <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">250,000,000 VND</span>
                </div>
                <span style={{ width: '720px', left: '30%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md px-5">
                    <div className="w-full flex justify-center">
                        <span className="font-black text-[18px] text-glow-strong">CHAMPION</span>
                    </div>
                    <ul className="list-disc text-justify font-light text-[16px] leading-6">
                        <li><p>1 electric motorbike from MET EV per person</p></li>
                        <li><p>1 2-day 1-night ticket for resort room at a MVillage branch per person</p></li>
                        <li><p>1 sampling box from Cerave per person</p></li>
                        <li><p>1 L'Usine Signature Totebag per person</p></li>
                        <li><p>1 2-day 1-night ticket for resort room at a MVillage branch per person</p></li>
                        <li><p>1 three-month membership card from Fonos audiobooks per person</p></li>
                        <li><p>1 21-day experience voucher from California Fitness & Yoga per person</p></li>
                        <li><p>Study free 1 course from the list of 13 courses from Brands Vietnam per person</p></li>
                        <li><p>1 dental care package from Singae Dental per person</p></li>
                        <li><p>Three piece non-stick ceramic coated cookware set from Morandi Amercook AC.0106.03 per person</p></li>
                        <li><p>1 box of sachet products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person</p></li>
                        <li><p>1 internship opportunity from MET EV per person</p></li>
                        <li><p>1 shortcut offer to interview round for Marketing Trainee position at MVillage per person</p></li>
                        <li><p>1 shortcut offer to interview round for Executive position at Kaya House per person</p></li>
                    </ul>
                </span>
            </div>

            <div className="flex justify-between pt-8">
                <div className='bg-transparent mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                    <div className="text-center">
                        <PageTitle title={'1ST RUNNER UP'} className="pb-4"></PageTitle>
                        <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">120,000,000 VND</span>
                    </div>
                    <span style={{ width: '720px', left: '50%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5">
                        <div className="w-full flex justify-center">
                            <span className="font-black text-[18px] text-glow-strong">1ST RUNNER UP</span>
                        </div>
                        <ul className="list-disc text-justify font-light text-[16px] leading-6">
                            <li><p>1 sampling box from Cerave per person</p></li>
                            <li><p>1 L'Usine Signature Totebag per person</p></li>
                            <li><p>1 three-month membership card from Fonos audiobooks per person</p></li>
                            <li><p>1 21-day experience voucher from California Fitness & Yoga per person</p></li>
                            <li><p>Study free 1 course from the list of 13 courses from Brands Vietnam per person</p></li>
                            <li><p>1 dental care package from Singae Dental per person</p></li>
                            <li><p>Three piece non-stick ceramic coated cookware set from Morandi Amercook AC.0106.03 per person</p></li>
                            <li><p>1 box of sachet products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person</p></li>
                            <li><p>1 internship opportunity from MET EV per person</p></li>
                            <li><p>1 shortcut offer to interview round for Marketing Trainee position at MVillage per person</p></li>
                            <li><p>1 shortcut offer to interview round for Executive position at Kaya House per person</p></li>
                        </ul>
                    </span>
                </div>

                <div className='bg-transparent mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                    <div className="text-center">
                        <PageTitle title={'2RD RUNNER UP'} className="pb-4"></PageTitle>
                        <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">80,000,000 VND</span>
                    </div>
                    <span style={{ width: '720px', right: '50%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5">
                        <div className="w-full flex justify-center">
                            <span className="font-black text-[18px] text-glow-strong">2RD RUNNER UP</span>
                        </div>
                        <ul className="list-disc text-justify font-light text-[16px] leading-6">
                            <li><p>1 three-month membership card from Fonos audiobooks per person</p></li>
                            <li><p>1 21-day experience voucher from California Fitness & Yoga per person</p></li>
                            <li><p>Study free 1 course from the list of 13 courses from Brands Vietnam per person</p></li>
                            <li><p>1 dental care package from Singae Dental per person</p></li>
                            <li><p>1 box of sachet products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person</p></li>
                            <li><p>1 internship opportunity from MET EV per person</p></li>
                            <li><p>1 shortcut offer to interview round for Marketing Trainee position at MVillage per person</p></li>
                            <li><p>1 shortcut offer to interview round for Executive position at Kaya House per person</p></li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="flex justify-between pt-8">
                <div className='bg-transparent mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                    <div className="text-center">
                        <PageTitle title={'TOP 8'} className="pb-4"></PageTitle>
                        <span className="font-bold text-[#FFFFFF] text-[40px] text-glow-strong">50,000,000 VND</span>
                    </div>
                    <span style={{ width: '720px', left: '50%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5">
                        <div className="w-full flex justify-center">
                            <span className="font-black text-[18px] text-glow-strong">TOP 8</span>

                        </div>
                        <ul className="list-disc text-justify font-light text-[16px] leading-6">
                            <li><p>1 three-month membership card from Fonos audiobooks per person</p></li>
                            <li><p>1 21-day experience voucher from California Fitness & Yoga per person</p></li>
                            <li><p>1 dental care package from Singae Dental per person</p></li>
                            <li><p>1 box of sachet products consisting of Kaya Premium Hainanese and Kaya Premium Nonya per person</p></li>
                            <li><p>1 shortcut offer to interview round for Marketing Trainee position at MVillage per person</p></li>
                            <li><p>1 shortcut offer to interview round for Executive position at Kaya House per person</p></li>

                        </ul>
                    </span>
                </div>

                {/* <div style={{ backgroundColor: '#6739B1' }}  className='mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <PageTitle title={'TOP 30'} className="pb-4"></PageTitle>
                    <span className="font-bold text-primary-500 text-[40px]">000,000,000 VND</span>
                </div>
                    <span style={{ width: '625px', right: '50%', top: '50px', zIndex: '50', backgroundColor: '#3D067D', opacity: '0.9', zIndex: '50', fontFamily: 'Brandon Grotesque' }} className="absolute hidden group-hover:block bg-black text-white border-2 border-yellow-500 rounded-md p-5">
                        <div className="w-full flex justify-center">
                            <span className="font-black text-[18px] text-glow-strong">TOP 30</span>
                        </div>
                        <ul className="list-disc text-justify font-light text-[18px]">
                        <li><p>1 cerave lotion full size 8oz/person (10 teams only)</p></li>
                        <li><p>1 21-day experience voucher from Cafornia Fitness & Yoga/ person</p></li>
                        <li><p>1 dental care package worth 1.5 million from Singae Dental / person</p></li>
                    </ul>
                </span>
            </div> */}
            </div>
        </main>
    );
};

export default Awardstructure;
