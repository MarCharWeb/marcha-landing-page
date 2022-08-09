import ImageHolder from "./ImageHolder";
import InternalLink from "./InternalLink";
import Image from 'next/image'

const AwardPanel = ({size, awardPic, type}) => {
    return ( <div className="bg-gradient-to-br from-[#54426A]/50 py-16 border rounded border-bg-300  backdrop-filter to-white/[1%]  backdrop-blur-2xl">
        <div className="flex flex-col items-center gap-6" >
            <ImageHolder src={awardPic} className={(size == 'small' ? 'w-[120px] h-[95px]': 'w-[180px] h-[141px]') + ' font-bold' } objectFit="fit" alt='champion-icon'></ImageHolder>
        
            <h5 className="font-bold tracking-widest text-center uppercase text-lead-24 text-secondary-600">{type}</h5>
        </div> 
        
        <h4 className={"mt-6 mb-5 font-bold text-center " + (size == 'small' ? 'text-headline-31' : 'text-headline-48')}>50.000.000 VNĐ IN CASH</h4>

        <div className={"mx-auto space-y-5 " + (size == 'small' ? 'w-3/4' : 'w-1/2')}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat tempus quis quam ullamcorper.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat tempus quis quam ullamcorper.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna consequat tempus quis quam ullamcorper.</p>
        </div>
        <p className="text-center mt-7 text-lead-24"> <InternalLink href="/" text="More details"></InternalLink></p>
        
    </div> );
}

export default AwardPanel;