import ImageHolder from "./ImageHolder";
import IndexBlogCard from "./IndexBlogCard";
import SectionTitle from "./SectionTitle";
import StarBg from "../assets/value-bg.png";
import Link from 'next/link'


const News = ({featurePosts}) => {
    return ( <section className="relative pt-48 md:pt-20 lg:pt-10 container-media-padding"> 
        <div className="flex items-center justify-between">
            <SectionTitle text='News'></SectionTitle>

            <div className="flex items-center gap-2">
                <Link href={'/news'}><a>View All </a></Link>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5803 11.0119L14.2902 8.72653V8.71654C13.8902 8.31735 13.8902 7.68861 14.2902 7.2994C14.6802 6.9002 15.3102 6.9002 15.7102 7.2994L19.7102 11.2914C19.9461 11.5207 20.0393 11.8449 19.9899 12.1515C19.9516 12.418 19.8066 12.6515 19.6 12.807L15.6995 16.6996C15.5095 16.8792 15.2495 16.989 14.9895 16.989L14.9995 17C14.7295 17 14.4695 16.8902 14.2895 16.7106C13.8895 16.3214 13.8895 15.6827 14.2795 15.2934V15.2835L16.5596 13.0079H5C4.44 13.0079 4 12.5588 4 12.0099C4 11.4511 4.44 11.0119 5 11.0119H16.5803Z" fill="white"/>
                </svg>
            </div>
            
        </div>
        
           
        <ImageHolder src={StarBg} style={{position: 'absolute'}} className='top-0 w-full h-[50vh] left-0' alt="marketing-challengers-season11-news"></ImageHolder>
        
        {/* Glow Effect in background  */}
        <svg className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 " width="1400" height="1400" viewBox="0 0 1400 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_637_2397)">
        <rect x="500" y="500" width="400" height="400" rx="200" fill="#F49402"/>
        <rect x="500.5" y="500.5" width="399" height="399" rx="199.5" stroke="#7751A4"/>
        </g>
        <defs>
        <filter id="filter0_f_637_2397" x="0" y="0" width="1400" height="1400" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_637_2397"/>
        </filter>
        </defs>
        </svg>


        
        <div className="relative grid grid-cols-1 gap-4 xl:gap-6 mt-2.5 xl:mt-5 md:grid-cols-2 lg:grid-cols-3">
            {/* <IndexBlogCard title={'Marcha lighthouse seeks brave and unique organisers'}> </IndexBlogCard>
            <IndexBlogCard title={'A story of a former light seeker'}> </IndexBlogCard>
            <IndexBlogCard title={'Finale round of Marketing Challenger season 11'}> </IndexBlogCard> */}

            {featurePosts.length > 0 && featurePosts.map(({title, thumbnail, slug}) => <IndexBlogCard title={title} thumbSrc={thumbnail} key={title} slug={slug.current}/>)}
        </div>
    </section> );
}
 
export default News;