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
            <div style={{ backgroundColor: '#6739B1' }}  className='group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <PageTitle title={'CHAMPION'} className="pb-4"></PageTitle>
                    <span className="font-bold text-primary-500 text-[40px]">000,000,000</span>
                </div>
                <span style={{left: '100%', marginLeft: '-500px', marginRight: '-500px', backgroundColor: '#000000', opacity: '0.9',zIndex: '10' }}  className="absolute hidden group-hover:block border-2 border-yellow-500 rounded-md text-[20px]">
                    <ul className="space-y-1 list-disc px-10 pt-5 text-justify">
                        <li><p>1 Electric car + Internship opportunity from MET EV/person</p></li>
                        <li><p>1 sampling box including lotion full size 8oz x2 + cream full size 120z x2 from Cerave/person</p></li>
                        <li><p>1 3-month membership card from Fonos audiobook/person</p></li>
                        <li><p>1 21-day experience voucher from Cafornia Fitness & Yoga/person</p></li>
                        <li><p>1 Free 2-day 1-night ticket for resort room at MVillage branch/person</p></li>
                        <li><p>Any one full course in the list of 13 courses from Brands Vietnam/person</p></li>
                        <li><p>1 dental care package worth 1.5 million from Singae Dental/person</p></li>
                        <li><p>Offer shsortcut to the interview round at the Marketing Trainee position at MVillage</p></li>
                    </ul>
                </span>
            </div>

<div className="flex justify-between pt-8">
            <div style={{ backgroundColor: '#6739B1' }}  className='mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <PageTitle title={'1ST RUNNER UP'} className="pb-4"></PageTitle>
                    <span className="font-bold text-primary-500 text-[40px]">000,000,000</span>
                </div>
                <span style={{left: '150%', marginLeft: '-500px', marginRight: '-500px', backgroundColor: '#000000', opacity: '0.9',zIndex: '10' }}  className="absolute hidden group-hover:block border-2 border-yellow-500 rounded-md text-[20px]">
                    <ul className="space-y-1 list-disc px-10 pt-5 text-justify justify-right">
                        <li><p>Internship opportunitiy from MET EV/ person</p></li>
                        <li><p>1 sampling box including lotion full size 8oz + cream full size 120z from Cerave/person</p></li>
                        <li><p>1 3-month membership card from Fonos audiobook/person</p></li>
                        <li><p>1 21-day experience voucher from Cafornia Fitness & Yoga/person</p></li>
                        <li><p>Any one full course in the list of 13 courses from Brands Vietnam/person</p></li>
                        <li><p>1 dental care package worth 1.5 million from Singae Dental/person</p></li>
                        <li><p>Offer shsortcut to the interview round at the Marketing Trainee position at MVillage</p></li>
                    </ul>
                </span>
            </div>

            <div style={{ backgroundColor: '#6739B1' }}  className='mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <PageTitle title={'2RD RUNNER UP'} className="pb-4"></PageTitle>
                    <span className="font-bold text-primary-500 text-[40px]">000,000,000</span>
                </div>
                <span style={{left: '50%', marginLeft: '-500px', marginRight: '-150px',backgroundColor: '#000000', opacity: '0.9',zIndex: '10' }}  className="absolute hidden group-hover:block border-2 border-yellow-500 rounded-md text-[20px]">
                    <ul className="space-y-1 list-disc px-10 pt-5 text-justify">
                        <li><p>Internship opportunitiy from MET EV/ person</p></li>
                        <li><p>1 sampling box including lotion full size 8oz + cream full size 120z from Cerave/person (only for 1 team) --> consider passing it on to champion of cerave</p></li>
                        <li><p>1 3-month membership card from Fonos audiobook/person</p></li>
                        <li><p>1 21-day experience voucher from Cafornia Fitness & Yoga/person</p></li>
                        <li><p>Any one full course in the list of 13 courses from Brands Vietnam/person</p></li>
                        <li><p>1 dental care package worth 1.5 million from Singae Dental/person</p></li>
                        <li><p>Offer shsortcut to the interview round at the Marketing Trainee position at MVillage</p></li>
                    </ul>
                </span>
            </div>
            </div>
            <div className="flex justify-between pt-8">
            <div style={{ backgroundColor: '#6739B1' }}  className='mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <PageTitle title={'TOP 8'} className="pb-4"></PageTitle>
                    <span className="font-bold text-primary-500 text-[40px]">000,000,000</span>
                </div>
                <span style={{left: '150%', marginLeft: '-500px', marginRight: '-500px', backgroundColor: '#000000', opacity: '0.9',zIndex: '10' }}  className="absolute hidden group-hover:block border-2 border-yellow-500 rounded-md text-[20px]">
                    <ul className="space-y-1 list-disc px-10 pt-5 text-justify">
                        <li><p>1 3-month membership card from Fonos audiobook/person</p></li>
                        <li><p>1 21-day experience voucher from Cafornia Fitness & Yoga/ person</p></li>
                        <li><p>1 dental care package worth 1.5 million from Singae Dental/person</p></li>
                        <li><p>Offer shsortcut to the interview round at the Marketing Trainee position at MVillage</p></li>
                    </ul>
                </span>
            </div>

            <div style={{ backgroundColor: '#6739B1' }}  className='mx-4 group text-headline-31 relative w-[550px] py-10 border-2 border-yellow-500 rounded-md'>
                <div className="text-center">
                    <PageTitle title={'TOP 30'} className="pb-4"></PageTitle>
                    <span className="font-bold text-primary-500 text-[40px]">000,000,000</span>
                </div>
                <span style={{left: '50%', marginLeft: '-500px', marginRight: '-500px', backgroundColor: '#000000', opacity: '0.9',zIndex: '10' }}  className="absolute hidden group-hover:block border-2 border-yellow-500 rounded-md text-[20px]">
                    <ul className="space-y-1 list-disc px-10 pt-5 text-justify">
                        <li><p>1 cerave lotion full size 8oz/person (10 teams only)</p></li>
                        <li><p>1 21-day experience voucher from Cafornia Fitness & Yoga/ person</p></li>
                        <li><p>1 dental care package worth 1.5 million from Singae Dental / person</p></li>
                    </ul>
                </span>
            </div>
            </div>
        </main>
    );
};

export default Awardstructure;
