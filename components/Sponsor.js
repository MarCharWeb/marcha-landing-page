import { useState } from "react";
import SectionTitle from "./SectionTitle";
import SponsorTag from "./SponsorTag";
import SponsorDisplay from "./SponsorDisplay";
import { sponsorLogo } from "../assets/sponsorLogo";

const Sponsor = () => {
    const [sponsorData, setSponsorData] = useState(sponsorLogo());
    const handleTagClick = (sponsorYear) => {
        let updateSponsorData = sponsorData.map(sps => {
            if (sps.year === sponsorYear) {
                return {...sps, isActive: true};
            }else {
                return {...sps, isActive: false};
            }
        })

        setSponsorData(updateSponsorData)
    }
    return (<section className="py-10 mt-36 xl:mt-24 relative z-[1] xl:py-16 bg-bg-400">
        <SectionTitle text={'Sponsors'}></SectionTitle>

        {/* Sponsor Tag List */}
        <div className="flex flex-wrap justify-center w-11/12 gap-4 pt-4 pb-8 mx-auto xl:w-10/12 xl:pt-6 xl:gap-6 2xl:w-8/12">
            {sponsorData.map((sps, index) => <SponsorTag key={index} handleTagClick={handleTagClick} text={sps.year} isActive={sps.isActive} />)}
        </div>

        <div className="w-10/12 mx-auto space-y-2.5 2xl:w-8/12">

            { sponsorData.find(sps => sps.isActive).sponsorLogos.length > 0 ? sponsorData.find(sps => sps.isActive).sponsorLogos?.map((logoCategory, index) => <SponsorDisplay key={index} categoryName={logoCategory.categoryName} logoList={logoCategory.logoList} />)
            : 
            <p className="text-center">To be updated</p>
            }

        </div>

    </section>);
}

export default Sponsor;