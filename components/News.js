import IndexBlogCard from "./IndexBlogCard";
import SectionTitle from "./SectionTitle";

const News = () => {
    return ( <section className="pt-16 container-media-padding"> 
        <SectionTitle text='News'></SectionTitle>
        <div className="grid grid-cols-3 gap-6 mt-7">
            <IndexBlogCard title={'Marcha lighthouse seeks brave and unique organisers'}> </IndexBlogCard>
            <IndexBlogCard title={'A story of a former light seeker'}> </IndexBlogCard>
            <IndexBlogCard title={'Finale round of Marketing Challenger season 11'}> </IndexBlogCard>
        </div>
    </section> );
}
 
export default News;