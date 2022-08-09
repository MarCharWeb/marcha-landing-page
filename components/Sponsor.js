import { useState } from "react";
import SectionTitle from "./SectionTitle";
import SponsorTag from "./SponsorTag";
import Logo from '../assets/logo-example.png'
import SponsorDisplay from "./SponsorDisplay";





const Sponsor = () => {
    const [sponsorData, setSponsorData] = useState([
        {
            year: 'Sponsor 11',
            sponsorLogos: [
                {
                    categoryName: 'Strategic Sponsors',
                    logoList: [Logo, Logo, Logo, Logo, Logo]

                },
                {
                    categoryName: 'Diamond Sponsors',
                    logoList: [Logo, Logo, Logo]

                },
                {
                    categoryName: 'Content Sponsors',
                    logoList: [Logo, Logo]

                },
                {
                    categoryName: 'Media Partners',
                    logoList: [Logo]

                },

            ],
            isActive: true
        },
        {
            year: 'Sponsor 10',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
        {
            year: 'Sponsor 09',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
        {
            year: 'Sponsor 08',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
        {
            year: 'Sponsor 07',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
        {
            year: 'Sponsor 06',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
        {
            year: 'Sponsor 05',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
        {
            year: 'Sponsor 04',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
        {
            year: 'Sponsor 03',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
        {
            year: 'Sponsor 02',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
        {
            year: 'Sponsor 01',
            sponsorLogos: [
                {
                    categoryName: 'State',

                }
            ],
            isActive: false
        },
    ])
    const handleTagClick = (sponsorYear) => {
        // let updateSponsorData = sponsorData.map(sps => {
        //     if (sps.year === sponsorYear) {
        //         return {...sps, isActive: true};
        //     }else {
        //         return {...sps, isActive: false};
        //     }
        // })

        // setSponsorData(updateSponsorData)
    }
    return (<section className="pb-16">
        <SectionTitle text={'Sponsors'}></SectionTitle>
        <div className="flex flex-wrap justify-center w-10/12 gap-10 pt-12 mx-auto 2xl:w-8/12 pb-14">
            {sponsorData.map((sps, index) => <SponsorTag key={index} handleTagClick={handleTagClick} text={sps.year} isActive={sps.isActive} />)}
        </div>

        <div className="w-10/12 mx-auto space-y-12 2xl:w-8/12">
            {sponsorData.find(sps => sps.isActive).sponsorLogos?.map((logoCategory, index) => <SponsorDisplay key={index} categoryName={logoCategory.categoryName} logoList={logoCategory.logoList} />)}

        </div>

    </section>);
}

export default Sponsor;