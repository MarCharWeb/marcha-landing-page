import ImageHolder from '../components/ImageHolder'
const SponsorDisplay = ({categoryName, logoList}) => {
    return ( 
        <div>
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <h5 className='font-bold text-lead-24 xl:text-lead-24 lg:text-headline-21'>{categoryName}</h5>
            
                <div className="max-w-[98%] xl:max-w-[80%] flex flex-wrap justify-center gap-5 items-center">
                    {logoList.map((logo, index) => <a key={index} target="_blank" rel="noreferrer"  href={logo.hasOwnProperty("logoLink") ? logo.logoLink: ""} ><ImageHolder  objectFit='fill' className={(logo.hasOwnProperty("logoClassName") ? logo.logoClassName : 'w-20 md:w-28 xl:w-40') + ""}  src={logo.logoImg}></ImageHolder></a>)} 
                </div>

            
            </div>

            <span className='block bg-bg-50/30 w-full h-[1px] mt-2 xl:mt-4'></span>
        </div>
     );
}
 
export default SponsorDisplay;