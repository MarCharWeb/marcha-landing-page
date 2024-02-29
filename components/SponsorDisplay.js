import ImageHolder from '../components/ImageHolder';

const SponsorDisplay = ({ categoryName, logoList }) => {
    const thresholdLength = 100; 
    const heightClass = logoList.length > thresholdLength ? 'h-[400px]' : 'h-[300px]';
    return ( 
        <div>
            <div className="flex flex-col items-center justify-between ">
                <h5 className='font-bold text-lead-24 xl:text-lead-32 lg:text-headline-32 text-glow-strong'>{categoryName}</h5>
                <div className={` xl:max-w-[90%] flex flex-wrap justify-center gap-5 items-center ${heightClass}`}>
                    {logoList.map((logo, index) => (
                        <a key={index} target="_blank" rel="noreferrer">
                            <ImageHolder objectFit='fill' className={`${logo.hasOwnProperty("logoClassName") ? logo.logoClassName : 'w-20 md:w-28 xl:w-40'}`} src={logo.logoImg} />
                        </a>
                    ))} 
                </div>
            </div>
            <span className='block bg-bg-50/30 w-full h-[1px] mt-2 xl:mt-4'></span>
        </div>
    );
}

export default SponsorDisplay;
