import IndexBlogCard from "./IndexBlogCard";
import PageTitle from "../components/PageTitle";
import Button from '../components/Button'
import { useRouter } from 'next/router'
import newbg from "../assets/newbg.png";

const News = ({featurePosts}) => {

    const router = useRouter();

    const handleSeeAllClick = () => {
        router.push('/news');
      }

    return ( <section className="relative pt-48 md:pt-20 lg:pt-10 container-media-padding" >
        <div id="blog" className="flex items-center justify-center">
        <PageTitle title={'BLOG'}></PageTitle>
        </div>
        
           
        {/* <ImageHolder src={StarBg} style={{position: 'absolute'}} className='top-0 w-full h-[50vh] left-0' alt="marketing-challengers-season11-news"></ImageHolder> */}
        
        {/* Glow Effect in background  */}
        {/* <svg className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 " width="1400" height="1400" viewBox="0 0 1400 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_637_2397)">
        <rect x="500" y="500" width="400" height="400" rx="200" fill="#F49402"/>
        <rect x="500.5" y="500.5" width="399" height="399" rx="199.5" stroke="#7751A4"/>
        </g>
        <defs>
        <filter id="filter0_f_637_2397" x="0" y="0" width="1400" height="1400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_637_2397"/>
        </filter>
        </defs>
        </svg> */}


        
        <div className="relative grid grid-cols-1 gap-4 xl:gap-6 mt-2.5 xl:mt-5 md:grid-cols-2 lg:grid-cols-2">
            {featurePosts.length > 0 &&
            featurePosts
            .slice(0, 2)
            .map(({ title, thumbnail, slug}) => (
                <IndexBlogCard title={title} thumbSrc={thumbnail} key={title} slug={slug.current}/>
            ))}
        </div>
        <div className="flex justify-center">
                <Button 
                    onClick={handleSeeAllClick}
                    isGlow={true}
                    type='primary'
                    className='animate-bounce-slow font-bold mt-10 mb-20 sm:mt-4'
                    text={'See All'}
                    size='large'
                />
            </div>
        </section> );
}
 
export default News;