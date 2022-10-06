import ImageHolder from "./ImageHolder";
import { urlFor } from '../config/sanity'
import Link from "next/link";


const BlogCard = ({thumbnail, title, abstract, slug}) => {
    return (
        <div className="bg-gradient-to-br from-[#310564]/[28%] py-5 flex flex-col lg:flex-row items-center gap-5 xl:gap-8 px-4 xl:px-12 md:py-8 lg:py-6 xl:py-10  rounded   backdrop-filter to-white/[4%]  backdrop-blur-2xl">
            <ImageHolder src={urlFor(thumbnail).url()} alt={"marketing-challengers-season11-"+title} priority={true} layout='fill' className={'w-full  aspect-4/3'}></ImageHolder>

            <div>
                <Link href={`news/${slug}`}><a><h2 className="mb-1 font-bold cursor-pointer md:mb-2 hover:text-primary-500 text-headline-26 xl:text-headline-37">{title}</h2></a></Link>
                <p className="line-clamp-4">{abstract}</p>
            </div>
        </div>
    );
}
 
export default BlogCard;