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

    return ( <section className="relative md:pt-20 lg:pt-10 container-media-padding" >
        <div id="blog" className="flex items-center justify-center">
        <PageTitle title={'BLOGS'}></PageTitle>
        </div>
      
        <div className="relative grid grid-cols-1 gap-4 xl:gap-6 mt-2.5 xl:mt-5 md:grid-cols-1 lg:grid-cols-2">
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
                    className='animate-bounce-slow font-bold mt-10 mb-16 sm:mt-4'
                    text={'See All'}
                    size='large'
                />
            </div>
        </section> );
}
 
export default News;
