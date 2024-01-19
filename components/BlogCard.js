import ImageHolder from "./ImageHolder";
import { urlFor } from '../config/sanity'
import Link from "next/link";


const BlogCard = ({thumbnail, title, abstract, slug}) => {
    return (
        <div className="bg-gradient-to-br from-[#310564]/[28%] py-5 flex flex-col lg:flex-row items-center gap-5 xl:gap-8 px-4 xl:px-12 md:py-8 lg:py-6 xl:py-10  rounded   backdrop-filter to-white/[4%]  backdrop-blur-2xl ">
            <ImageHolder src={urlFor(thumbnail).url()} alt={"marketing-challengers-season12-"+title} priority={true} layout='fill' className="w-full h-full object-cover aspect-4/3 "></ImageHolder>

            <div>
                <Link href={`news/${slug}`}><h4 className="cursor-pointer font-bold text-headline-31 text-glow-strong text-jutify text-[30px]">{title}</h4></Link>
                <p className="line-clamp-4">{abstract}</p>
            </div>
        </div>
    );
}
 
export default BlogCard;