import ImageHolder from '../components/ImageHolder'
const SponsorDisplay = ({categoryName, logoList}) => {
    return ( 
        <div>
            <div className="flex items-center justify-between">
                <h5 className='font-bold text-lead-24'>{categoryName}</h5>
            
                <div className="max-w-[50%] flex flex-wrap justify-center items-center">
                    {logoList.map((logo, index) => <ImageHolder key={index} className={'w-32 h-32'} src={logo}></ImageHolder>)} 
                </div>

            
            </div>

            <span className='block bg-bg-100/30 w-full h-[1px] mt-8'></span>
        </div>
     );
}
 
export default SponsorDisplay;