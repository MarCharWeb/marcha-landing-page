import ImageHolder from "./ImageHolder";
import { urlFor } from '../config/sanity'
import Link from "next/link";


const IndexBlogCard = ({thumbSrc, title, slug}) => {
    return ( <div className="space-y-2 xl:space-y-4">
        <ImageHolder src={urlFor(thumbSrc).url()} className='w-full rounded aspect-4/3' layout="fill"></ImageHolder>
        {/* <div className="bg-grey-700 aspect-4/3"></div> */}
        
        <Link href={`news/${slug}`}><a><h5 className="duration-200 text-lead-24 hover:text-primary-500 line-clamp-2">{title}</h5></a></Link>
    </div> );
}
 
export default IndexBlogCard ;