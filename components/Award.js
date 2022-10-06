import AwardPanel from "./AwardPanel";
import SectionTitle from "./SectionTitle";
import ChampionPic from '../assets/champion-icon.png'
import SilverPic from '../assets/silver-icon.jpg'
import BronzePic from '../assets/bronze-icon.png'
import ImageHolder from "./ImageHolder";
import PrizeElement from "../assets/prize-element.png"


const Award = () => {
    return ( <section className="relative z-10 pt-32 pb-16 xl:pb-24 lg:pt-16 container-media-padding">
    
        <span className="absolute w-[400px] h-[400px] rounded-full bg-secondary-500 filter blur-[200px] right-0 top-0 transform translate-y-full -translate-x-full"></span>
        <span className="absolute w-[400px] h-[400px] rounded-full bg-[#1865B3] filter blur-[200px] right-1/2 top-1/2 "></span>
        <SectionTitle text={'Prize'}></SectionTitle>

        {/* Background element */}
        <ImageHolder src={PrizeElement} className='bottom-0 left-0 hidden w-screen lg:block aspect-square' style={{position: "absolute"}} ></ImageHolder>

        <div className="w-[95%] mx-auto mt-4 xl:w-10/12">

            <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2">
                <AwardPanel size='small' awardPic={SilverPic} type='first runner-up'> </AwardPanel>
                <AwardPanel size='small' awardPic={BronzePic} type='second runner-up'> </AwardPanel>
            </div>
        </div>
    </section> );
}
 
export default Award;