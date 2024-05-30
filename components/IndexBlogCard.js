import ImageHolder from "./ImageHolder";
import { urlFor } from '../config/sanity'
import Link from "next/link";

const IndexBlogCard = ({thumbSrc, title, abstract, slug}) => {
    return (
        <div className="flex flex-col items-center space-y-2 xl:space-y-4 text-center">
        <ImageHolder src={urlFor(thumbSrc).url()} className='w-full w-90 rounded aspect-4/3' layout="fill"></ImageHolder>
        {/* <div className="bg-grey-700 aspect-4/3"></div> */}
        
        <Link href={`news/${slug}`}><a><h5 className="duration-200 text-lead-2 hover:text-glow-strong line-clamp-2">{title}</h5></a></Link>
        <div>{abstract}</div>
    </div>

    );
}





export default IndexBlogCard;
