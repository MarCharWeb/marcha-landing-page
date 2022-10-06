import ImageHolder from "./ImageHolder";
import InternalLink from "./InternalLink";
import Image from 'next/image'

const AwardPanel = ({size, awardPic, type}) => {
    return ( <div className="bg-gradient-to-br from-[#54426A]/50 py-5 lg:py-10 border rounded border-bg-300  backdrop-filter to-white/[1%]  backdrop-blur-2xl">
        <div className="flex flex-col items-center gap-3 lg:gap-6" >
            <ImageHolder src={awardPic} className={(size == 'small' ? 'w-[90px] h-[72px] lg:w-[120px] lg:h-[95px]': 'w-[180px] h-[141px]') + ' font-bold' } objectFit="fit" alt='champion-icon'></ImageHolder>
        
            <h5 className="font-light tracking-widest text-center uppercase text-body-18 lg:text-lead-24 text-secondary-600">{type}</h5>
        </div> 
        
        <h4 className={"mt-0 lg:mt-1 mb-1 lg:mb-3 font-bold text-center " + (size == 'small' ? 'text-lead-24 px-4 lg:text-headline-31' : 'text-headline-48')}>50.000.000 VNĐ IN CASH</h4>

        <div className={"mx-auto text-body-18 md:text-headline-21 space-y-2.5 lg:space-y-5 " + (size == 'small' ? 'w-[85%] lg:w-4/5' : 'w-1/2')}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat tempus quis quam ullamcorper.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat tempus quis quam ullamcorper.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat tempus quis quam ullamcorper.</p>
        </div>
        <p className="mt-4 text-center lg:mt-7 text-lead-24"> <InternalLink href="/" text="More details"></InternalLink></p>
        
    </div> );
}

export default AwardPanel;