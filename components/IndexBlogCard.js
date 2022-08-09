import ImageHolder from "./ImageHolder";

const IndexBlogCard = ({thumbSrc, title}) => {
    return ( <div className="space-y-4">
        {/* <ImageHolder src={thumbSrc} className='rounded aspect-4/3'></ImageHolder> */}
        <div className="bg-grey-700 aspect-4/3"></div>
        <h5 className="font-bold text-lead-24">{title}</h5>
    </div> );
}
 
export default IndexBlogCard ;