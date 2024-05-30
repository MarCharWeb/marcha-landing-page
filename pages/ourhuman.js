import PageTitle from "../components/PageTitle";
import Image from 'next/image';
import Footer from "../components/Footer";

import Leaderboardimg from '../assets/TeamImage/Leaderboard.jpg';
import Marketingimg from '../assets/TeamImage/Marketing-Team.jpg';
import Mediaimg from '../assets/TeamImage/Media-Team.jpg';
import Operationsimg from '../assets/TeamImage/Operations-Team.jpg';
import Programimg from '../assets/TeamImage/Program-Team.jpg';
import Sponsorimg from '../assets/TeamImage/Team-Sponsor.jpg';

import newbg from '../assets/newbg.png';

const Ourhuman = () => {
    return (
        <main className="space-y-1 sm:pt-12 lg:pt-20 bg-fixed" style={{
            backgroundImage: `url(${newbg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '0% 0%',
            zIndex: 2,
        }}>
            <div className="">
                <PageTitle className="" title={'OUR HUMAN'} type={2}></PageTitle>
                <h4 className="pt-10 flex items-center justify-center font-bold text-headline-31 lg:text-headline-37 text-glow-strong ">Leader Board</h4>
                <div className="w-screen flex items-center justify-center pb-5 px-4">
                    <Image className="flex items-center justify-center bg-gray-300 p-4 object-center lg:w-[500px] lg:h-auto" src={Leaderboardimg} width={650} height={420} />
                </div>
                <div className="w-screen flex items-center justify-center pb-5">
                </div>
                <div className="lg:flex lg:items-center mx-5 py-5">
                    <div className="lg:w-1/2 w-full bg-gray-300 ">
                        <h4 className="flex items-center justify-center font-bold text-headline-31 lg:text-headline-37 text-glow-strong">Sponsor Team</h4>
                        <div className="flex items-center justify-center">
                            <Image className="flex items-center justify-center h-screen" src={Sponsorimg} width={650} height={400} />
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full bg-blue-300 text-justify mt-4 lg:mt-10 lg:mx-4 flex items-center justify-center lg:pl-4">
                        &quot;Meet the dedicated sponsor team of Marketing Challengers Season 12! As integral members of the organizing committee, our primary focus lies in securing valuable sponsors for the competition. Committed to fostering partnerships that further elevate the competition&apos;s value, we work tirelessly to ensure the support necessary for its success. Together, we contribute to the seamless execution of Marketing Challengers, enriching the experience for participants and sponsors alike. Stay tuned to see what the sponsor team has in store for our beloved participants this season!&quot;
                    </div>
                </div>
                <div className="lg:flex lg:items-center mx-5 py-5">
                    <div className="lg:w-1/2 w-full bg-gray-300 lg:order-2">
                        <h4 className="flex items-center justify-center font-bold text-headline-31 lg:text-headline-37 text-glow-strong ">Marketing Team</h4>
                        <div className="flex items-center justify-center ">
                            <Image className="flex items-center justify-center h-screen" src={Marketingimg} width={620} height={400} />
                        </div>

                    </div>
                    <div className="lg:w-1/2 w-full bg-blue-300 text-justify mt-4 lg:mt-10 lg:mx-4 flex items-center justify-center lg:pr-4">
                        &quot;Marketing team is responsible for developing and implementing strategies to promote brand awareness and drive sales of Marketing Challengers throughout every season. We serve as the face of the whole project coordinating and producing all materials representing Marketing Challengers . Marketing team will work closely with other teams to determine budgets, targets, and pricing strategies . We play a critical role in aligning creative direction with project&aposs strategic goals . The team develops marketing plans with specific objectives across different channels and segments . We analyze customer insights, consumer trends, market analysis, and marketing best practices to build successful strategies . We also manages marketing projects and activities, ensuring they stay on track and on budget . &quot;
                    </div>
                </div>

                <div className="lg:flex lg:items-center mx-5 py-5">
                    <div className="lg:w-1/2 w-full bg-gray-300">
                        <h4 className="flex items-center justify-center font-bold text-headline-31 lg:text-headline-37 text-glow-strong">Media Team</h4>
                        <div className="flex items-center justify-center">
                            <Image className="flex items-center justify-center h-screen" src={Mediaimg} width={620} height={330} />
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full bg-blue-300 text-justify mt-4 lg:mt-10 lg:mx-4 flex items-center justify-center lg:pl-4">
                        &quot;Media Team is the face of Marketing Challengers, we will be responsible for all online images on every social media channel in parallel with website development throughout the competition. In addition, we will be the connection department with Media Sponsors, Media Supporters, and Media Ambassadors&quot;
                    </div>
                </div>

                <div className="lg:flex lg:items-center mx-5 py-5">
                    <div className="lg:w-1/2 w-full bg-gray-300 lg:order-2">
                        <h4 className="flex items-center justify-center font-bold text-headline-31 lg:text-headline-37 text-glow-strong ">Program Team</h4>
                        <div className="flex items-center justify-center">
                            <Image className="flex items-center justify-center h-screen" src={Programimg} width={620} height={330} />
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full bg-blue-300 text-justify mt-4 lg:mt-10 lg:mx-4 flex items-center justify-center lg:pr-4">
                        &quot;Program Team conveys primarily all core materials of Marketing Challengers. Here we work cohesively to drive the competition&aposs success through each initiative strategy. Specifically, defining projects&apos objectives, establishing timeline; planning event&aposs agenda, round structures and especially client brief&aposs overview as the main criteria for judges to find out the winner. Our mission is how to foster contestant&aposs marketing sense and ensure academic quality throughout each season.&quot;
                    </div>
                </div>

                <div className="lg:flex lg:items-center mx-5 py-5">
                    <div className="lg:w-1/2 w-full bg-gray-300">
                        <h4 className="flex items-center justify-center font-bold text-headline-31 lg:text-headline-37 text-glow-strong ">Operations Team</h4>
                        <div className="flex items-center justify-center">
                            <Image className="flex items-center justify-center h-screen" src={Operationsimg} width={620} height={330} />
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full bg-blue-300 text-justify mt-4 lg:mt-10 lg:mx-4 flex items-center justify-center lg:pl-4">
                        &quot;Our team is the pivotal force in ensuring the smooth execution of the all events. We are responsible for orchestrating the finer details like paperwork, venue preparation, and on-site coordination. Our focus on logistics and on-the-ground management is the key bringing the event to life, guaranteeing a memorable and well-organised experience for all.&quot;
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}

export default Ourhuman;
