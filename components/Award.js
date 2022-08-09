import AwardPanel from "./AwardPanel";
import SectionTitle from "./SectionTitle";
import ChampionPic from '../assets/champion-icon.png'
import SilverPic from '../assets/silver-icon.jpg'
import BronzePic from '../assets/bronze-icon.png'

const Award = () => {
    return ( <section className="relative py-28 container-media-padding">
    
        <span className="absolute w-[400px] h-[400px] rounded-full bg-secondary-500 filter blur-[200px] right-0 top-0 transform translate-y-full -translate-x-full"></span>
        <span className="absolute w-[400px] h-[400px] rounded-full bg-[#1865B3] filter blur-[200px] right-1/2 top-1/2 "></span>
        <SectionTitle text={'Award'}></SectionTitle>

        <div className="w-10/12 mx-auto mt-10">

            <AwardPanel awardPic={ChampionPic} type='champion'> </AwardPanel>

            <div className="grid grid-cols-2 gap-6 mt-6">
                <AwardPanel size='small' awardPic={SilverPic} type='first runner-up'> </AwardPanel>
                <AwardPanel size='small' awardPic={BronzePic} type='second runner-up'> </AwardPanel>
            </div>
        </div>
    </section> );
}
 
export default Award;