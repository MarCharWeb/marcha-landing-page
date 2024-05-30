import ImageHolder from "./ImageHolder";
import { urlFor } from '../config/sanity'
import Link from "next/link";

const BlogCard = ({ thumbnail, title, abstract, slug }) => {
  return (
    <div className="bg-gradient-to-br from-[#FFFFFF]/[50%] py-5 flex flex-col lg:flex-row items-center gap-5 xl:gap-8 px-4 xl:px-12 md:py-8 lg:py-6 xl:py-10  rounded backdrop-filter to-[#3d067d]/[50%]  backdrop-blur-2xl ">
      <Link href={`news/${slug}`}>
        <a className="lg:w-1/3 w-full h-full object-cover aspect-4/3">
          <ImageHolder src={urlFor(thumbnail).url()} alt={"marketing-challengers-season12-" + title} priority={true} layout='fill' className="w-full h-full object-cover" />
        </a>
      </Link>

      <div className="w-full ">
        <Link href={`news/${slug}`}>
          <a>
            <h4 className="line-clamp-4 cursor-pointer font-bold lg:text-headline-31 hover:text-glow-strong text-jutify lg:text-[30px] text-[20px] text-glow-normal">{title}</h4>
          </a>
        </Link>
        <p className="line-clamp-4">{abstract}</p>
      </div>
    </div>
  );
}

export default BlogCard;
