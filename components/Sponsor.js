import { useState } from "react";
import SponsorDisplay from "./SponsorDisplay";
import { sponsorLogo } from "../assets/sponsorLogo";
import PageTitle from "../components/PageTitle";
import Button from '../components/Button'
import { useRouter } from 'next/router';

const Sponsor = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/sponsor');
    };
    
    const [sponsorData, setSponsorData] = useState(sponsorLogo());
    const handleTagClick = (sponsorYear) => {
        let updateSponsorData = sponsorData.map(sps => {
            if (sps.year === sponsorYear) {
                return { ...sps, isActive: true };
            } else {
                return { ...sps, isActive: false };
            }
        })

        setSponsorData(updateSponsorData)
    }
    return (<section className="py-10 xl:mt-24 relative z-[1] xl:py-16 lg:mt-24 md:pt-[600px] sm:pt-[450px]" id="sponsorship">
        <PageTitle className="" title={'SPONSORSHIP'}></PageTitle>
        <div className="w-10/12 mx-auto space-y-2.5 2xl:w-8/12 pt-4">
            {sponsorData.find(sps => sps.isActive).sponsorLogos.length > 0 ? sponsorData.find(sps => sps.isActive).sponsorLogos?.map((logoCategory, index) => <SponsorDisplay key={index} categoryName={logoCategory.categoryName} logoList={logoCategory.logoList} />)
                :
                <p className="text-center">To be updated</p>
            }
        </div>
        <div className="flex items-center justify-center">
        <Button 
            onClick={handleClick}
            isGlow={true}
            type='primary'
            className='animate-bounce-slow font-bold mt-10'
            text={'Learn More'}
            size='large'
        />
        </div>
        
    </section>);
}

export default Sponsor;
