//Season 11 Logos Import
import DiamondSs11 from './season11/diamond.png'
import ExclusiveSs11 from './season11/exclusive.png'
import Executive1Ss11 from './season11/executive-1.png'
import Executive2Ss11 from './season11/executive-2.png'
import Executive3Ss11 from './season11/executive-3.png'
import Executive4Ss11 from './season11/executive-4.png'
import Academic1Ss11 from './season11/academic-1.png'
import Silver1Ss11 from './season11/silver-1.png'
import Silver2Ss11 from './season11/silver-2.png'
import Bronze1Ss11 from './season11/bronze-1.jpg'
import Bronze2Ss11 from './season11/bronze-2.png'
import StreamingSs11 from './season11/streaming.jpg'
import Media1Ss11 from './season11/media-1.png'
import Media2Ss11 from './season11/media-2.png'



//Season 10 Logos Import
import ExclusiveSs10 from './season10/exclusive.png'

import InKind1Ss10 from './season10/in-kind-1.png'
import InKind2Ss10 from './season10/in-kind-2.jpg'
import InKind3Ss10 from './season10/in-kind-3.png'
import InKind4Ss10 from './season10/in-kind-4.png'
import InKind5Ss10 from './season10/in-kind-5.png'
import InKind6Ss10 from './season10/in-kind-6.png'
import InKind7Ss10 from './season10/in-kind-7.png'
import InKind8Ss10 from './season10/in-kind-8.png'

import Media1Ss10 from './season10/media-1.png'
import Media2Ss10 from './season10/media-2.png'
import Media3Ss10 from './season10/media-3.png'
import Media4Ss10 from './season10/media-4.png'
import Media5Ss10 from './season10/media-5.png'

import Strategic1Ss10 from './season10/strategic-1.png'
import Strategic2Ss10 from './season10/strategic2.png'
import Strategic3Ss10 from './season10/strategic-3.png'
import Strategic4Ss10 from './season10/strategic-4.png'
import Strategic5Ss10 from './season10/strategic-5.png'
import Strategic6Ss10 from './season10/strategic-6.png'


//Season 9 Logos Import
import ExclusiveSs9 from './season9/exclusive.png'

import Strategic1Ss9 from './season9/strategic-1.png'
import Strategic2Ss9 from './season9/strategic-2.png'
import Strategic3Ss9 from './season9/strategic-3.png'
import Strategic4Ss9 from './season9/strategic-4.png'
import Strategic5Ss9 from './season9/strategic-5.png'
import Strategic6Ss9 from './season9/strategic-6.webp'

import InKind1Ss9 from './season9/in-kind-1.png'
import InKind2Ss9 from './season9/in-kind-2.png'
import InKind3Ss9 from './season9/in-kind-3.png'


//Season 8 Logos Import
import ExclusiveSs8 from './season8/exclusive.png'

import InKind1Ss8 from './season8/in-kind-1.png'
import InKind2Ss8 from './season8/in-kind-2.png'
import InKind3Ss8 from './season8/in-kind-3.png'

import Media1Ss8 from './season8/media-1.png'

import Strategic1Ss8 from './season8/strategic-1.png'


//Season 7 Logos Import
import ExclusiveSs7 from './season7/exclusive.png'

import InKind1Ss7 from './season7/in-kind-1.png'
import InKind2Ss7 from './season7/in-kind-2.png'

import Media1Ss7 from './season7/media-1.png'

import Strategic1Ss7 from './season7/strategic-1.png'

//Season 6 Logos Import
import ExclusiveSs6 from './season6/exclusive.png'

//Season 5 Logos Import
import ExclusiveSs5 from './season5/exclusive.png'

import Media1Ss5 from './season5/media-1.png'
import Media2Ss5 from './season5/media-2.png'

import Strategic1Ss5 from './season5/strategic-1.png'

//Season 4 Logos Import
import ExclusiveSs4 from './season4/exclusive.png'

//Season 3 Logos Import
import ExclusiveSs3 from './season3/exclusive.png'

//Season 2 Logos Import
import ExclusiveSs2 from './season2/exclusive.png'

//Season 1 Logos Import
import ExclusiveSs1 from './season1/exclusive.png'

export const sponsorLogo = () => {
    return [
        {
            year: 'Sponsor 11',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsor',
                    logoList: [ExclusiveSs11]

                },
                {
                    categoryName: 'Diamond Sponsor',
                    logoList: [DiamondSs11]

                },
                {
                    categoryName: 'Executive Sponsors',
                    logoList: [Executive1Ss11, Executive2Ss11, Executive3Ss11, Executive4Ss11]

                },
                {
                    categoryName: 'Academic Sponsors',
                    logoList: [Academic1Ss11, Media2Ss10]

                },
                {
                    categoryName: 'Silver Sponsors',
                    logoList: [Silver1Ss11, Silver2Ss11]

                },
                {
                    categoryName: 'Bronze Sponsors',
                    logoList: [Bronze1Ss11, Bronze2Ss11, InKind4Ss10, Strategic1Ss8]

                },
                {
                    categoryName: 'Streaming Sponsor',
                    logoList: [StreamingSs11]

                },
                {
                    categoryName: 'Media Sponsors',
                    logoList: [Media1Ss11, Media2Ss10, Media1Ss10, Strategic5Ss10, Media2Ss11]

                },


            ],
            isActive: true
        },
        {
            year: 'Sponsor 10',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs10]

                },
                {
                    categoryName: 'In-kind Sponsors',
                    logoList: [InKind2Ss10, InKind3Ss10, InKind4Ss10, InKind5Ss10, InKind6Ss10, InKind1Ss10, InKind7Ss10, InKind8Ss10]

                },
                {
                    categoryName: 'Media Sponsors',
                    logoList: [Media1Ss10, Media2Ss10, Media3Ss10, Media4Ss10, Media5Ss10]

                },
                {
                    categoryName: 'Strategic Sponsors',
                    logoList: [Strategic1Ss10, Strategic2Ss10, Strategic3Ss10, Strategic4Ss10, Strategic5Ss10, Strategic6Ss10]

                },
            ],
            isActive: false
        },
        {
            year: 'Sponsor 09',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs9]

                },
                {
                    categoryName: 'In-kind Sponsors',
                    logoList: [InKind2Ss9, InKind3Ss9, InKind1Ss10, InKind1Ss9, ]

                },
                {
                    categoryName: 'Strategic Sponsors',
                    logoList: [Strategic1Ss9, Strategic2Ss9, Strategic3Ss9, Strategic4Ss9, Strategic5Ss9, Strategic6Ss9, Strategic5Ss10, Strategic6Ss10]

                },
            ],
            isActive: false
        },
        {
            year: 'Sponsor 08',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs8]

                },
                {
                    categoryName: 'In-kind Sponsors',
                    logoList: [InKind2Ss8, InKind3Ss8, InKind1Ss8, ]

                },
                {
                    categoryName: 'Strategic Sponsors',
                    logoList: [Strategic1Ss8,Strategic1Ss10, Strategic4Ss9]

                },
                {
                    categoryName: 'Media Sponsors',
                    logoList: [Media1Ss8, Media2Ss10, Media4Ss10]

                },
            ],
            isActive: false
        },
        {
            year: 'Sponsor 07',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs7]

                },
                {
                    categoryName: 'In-kind Sponsors',
                    logoList: [InKind2Ss8, InKind1Ss7, ]

                },
                {
                    categoryName: 'Strategic Sponsors',
                    logoList: [Strategic1Ss7,Strategic3Ss10]

                },
                {
                    categoryName: 'Media Sponsors',
                    logoList: [Media1Ss7, Media4Ss10, Media2Ss10]

                },
            ],
            isActive: false
        },
        {
            year: 'Sponsor 06',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs6]

                },
                {
                    categoryName: 'Media Sponsors',
                    logoList: [Media1Ss7, Media2Ss10]

                },
            ],
            isActive: false
        },
        {
            year: 'Sponsor 05',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs5]

                },
                {
                    categoryName: 'Strategic Sponsors',
                    logoList: [Strategic1Ss5, Strategic5Ss10, Strategic1Ss8]

                },
                {
                    categoryName: 'Media Sponsors',
                    logoList: [Media1Ss5, Media1Ss7, Media2Ss5, Media2Ss10]

                },
            ],
            isActive: false
        },
        {
            year: 'Sponsor 04',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs4]

                },
            ],
            isActive: false
        },
        {
            year: 'Sponsor 03',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs3]

                },
            ],
            isActive: false
        },
        {
            year: 'Sponsor 02',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs2]

                },
            ],
            isActive: false
        },
        {
            year: 'Sponsor 01',
            sponsorLogos: [
                {
                    categoryName: 'Exclusive Sponsors',
                    logoList: [ExclusiveSs1]

                },
            ],
            isActive: false
        },
    ]
}