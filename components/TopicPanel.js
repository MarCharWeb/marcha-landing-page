import ImageHolder from "./ImageHolder";
import InternalLink from "./InternalLink";

const TopicPanel = ({sponsorPic, sponsorName='name', topicLink='/'}) => {
    return ( <div className="bg-gradient-to-br from-[#54426A]/50 py-5 lg:py-10 border rounded border-bg-300  backdrop-filter to-white/[1%]  backdrop-blur-2xl">
         {/* <ImageHolder src={sponsorPic} className={(size == 'small' ? 'w-[90px] h-[72px] lg:w-[120px] lg:h-[95px]': 'w-[180px] h-[141px]') + ' font-bold' } objectFit="fit" alt='champion-icon'></ImageHolder> */}
        
        <h4 className={"mt-0 lg:mt-1 mb-1 lg:mb-3 font-bold text-center " + (size == 'small' ? 'text-lead-24 px-4 lg:text-headline-31' : 'text-headline-48')}>{sponsorName}</h4>

        <p className="mt-4 text-center lg:mt-7 text-lead-24"> <InternalLink href={topicLink} text="More details"></InternalLink></p>
        
    </div> );
}
 
export default TopicPanel;