import { useState } from "react";
import SponsorDisplay from "../components/SponsorDisplay";
import { sponsorLogo } from "../assets/sponsorLogo";
import PageTitle from "../components/PageTitle";
import Birdbg from "../assets/bird-bg.png"
import SponsorTag from "../components/SponsorTag";
import Footer from "../components/Footer";
import Avabg from '../assets/Ava-background.png'
import newbg from '../assets/newbg.png';


const Sponsor = () => {

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
    return (<section className="relative z-[1] xl:pt-16 sm:pt-12 lg:pt-20 bg-fixed" style={{
        backgroundImage: `url(${newbg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',  // Adjust as per your requirement
        backgroundPosition: '0% 0%',
        zIndex: 2,
    }}>
        <PageTitle className="lg:mt-2 xl:pt-5" title={'SPONSORSHIP'}></PageTitle>
        {/* Sponsor Tag List */}

        <div className="flex flex-wrap justify-center w-11/12 gap-4 pt-4 pb-8 mx-auto xl:w-10/12 xl:pt-6 xl:gap-6 2xl:w-8/12"
            style={{
                backgroundImage: `url(${Birdbg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '10% 60%',
                backgroundPosition: '100% 105%',
                zIndex: 1,
            }
            }>
            {sponsorData.map((sps, index) => <SponsorTag key={index} handleTagClick={handleTagClick} text={sps.year} isActive={sps.isActive} />)}
        </div>

        <div className="w-10/12 mx-auto space-y-2.5 2xl:w-8/12">

            {sponsorData.find(sps => sps.isActive).sponsorLogos.length > 0 ? sponsorData.find(sps => sps.isActive).sponsorLogos?.map((logoCategory, index) => <SponsorDisplay key={index} categoryName={logoCategory.categoryName} logoList={logoCategory.logoList} />)
                :
                <p className="text-center">To be updated</p>
            }

        </div>
        <Footer></Footer>

    </section>);
}

export default Sponsor;
