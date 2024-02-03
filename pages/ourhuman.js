import PageTitle from "../components/PageTitle";
// import Image from 'next/image';
import Footer from "../components/Footer";

import Leaderboardimg from '../assets/TeamImage/Leaderboard.jpg';
import Marketingimg from '../assets/TeamImage/Marketing-Team.jpg';
import Mediaimg from '../assets/TeamImage/Media-Team.jpg';
import Operationsimg from '../assets/TeamImage/Operations-Team.jpg';
import Programimg from '../assets/TeamImage/Program-Team.jpg';
import Sponsorimg from '../assets/TeamImage/Team-Sponsor.jpg';

import Avabg from '../assets/Ava-background.png';

const Ourhuman = () => {
  return (
    <main className="space-y-1 pb-10 pt-20">
                <PageTitle className="" title={'OUR HUMAN'} type={2}></PageTitle>
    <h4 className="pt-10 flex items-center justify-center font-bold text-headline-31 lg:text-headline-37 text-glow-strong ">Leader Board</h4>
            <div className="w-screen flex items-center justify-center pb-5">
            </div>
            <div className="lg:flex lg:items-center mx-5 py-5">
                <div className="lg:w-1/2 w-full bg-gray-300 ">
                    <h4 className="flex items-center justify-center font-bold text-headline-31 lg:text-headline-37 text-glow-strong">Sponsor Team</h4>
                    <div className="flex items-center justify-center">
                    </div>
                </div>
                <div className="lg:w-1/2 w-full bg-blue-300 text-justify mt-10 lg:mx-4 flex items-center justify-center">
                    &quot;Meet the dedicated sponsor team of Marketing Challengers Season 12! As integral members of the organizing committee, our primary focus lies in securing valuable sponsors for the competition. Committed to fostering partnerships that further elevate the competition&apos;s value, we work tirelessly to ensure the support necessary for its success. Together, we contribute to the seamless execution of Marketing Challengers, enriching the experience for participants and sponsors alike. Stay tuned to see what the sponsor team has in store for our beloved participants this season!&quot;
                </div>            
                </div>
    </main>
    );
}

export default Ourhuman;
