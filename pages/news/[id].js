
import { sanityClient, urlFor } from '../../config/sanity';
import ImageHolder from '../../components/ImageHolder'
import BlogCard from '../../components/BlogCard'
import {PortableText} from '@portabletext/react'
import Footer from "../../components/Footer";
import newbg from '../../assets/newbg.png';


const Post = ({data:{title, abstract, headerImage, facebookLink, body, relatedPosts}}) => {
    const stylePortableText = {
        types:{
            bodyImage: ({value}) => { return <figure className='pb-4'><ImageHolder src={urlFor(value.image).url()} alt={title} className='w-full aspect-4/3' layout='fill'/> <figcaption className='pt-2 text-center text-small-16 text-grey-400'>{value.caption}</figcaption> </figure>  }
        },
        block: {
            h4: ({children}) => <h4 className='pt-2 pb-4 font-bold text-lead-24'>{children}</h4>,
            h3: ({children}) => <h3 className='pt-2 pb-4 font-bold text-headline-26'>{children}</h3>,
            h2: ({children}) => <h2 className='pt-2 pb-4 font-bold text-headline-31'>{children}</h2>,
            h1: ({children}) => <h1 className='pt-2 pb-4 font-bold text-headline-37'>{children}</h1>,
            normal: ({children}) => children.includes('') ? <br/>: <p className='pb-2'>{children}</p>,
        },
        
        list: {
            bullet: ({children}) => <ul  className="px-4 pb-2 list-disc">{children}</ul>,
            number: ({children}) => <ol className="px-4 pb-2 list-decimal">{children}</ol>,
        },
        listItem: {
             bullet: ({children}) => <li className='list-item '> {children}</li>,
        }
    }

    return ( 
        <main className='pt-28 container-media-padding bg-fixed'style={{
            backgroundImage: `url(${newbg.src})`, // Check if .src is correctly providing the URL
            backgroundSize: 'cover', // Ensure background size is set
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center', // Adjust the position if needed
            zIndex: 2,
        }}>
          <section className='w-full mx-auto md:w-11/12 xl:w-10/12'>
             <h1 className='font-bold leading-[1.2em] text-headline-48 xl:text-display-64 mb-4 xl:mb-7'>{title}</h1>
             <h5 className='mb-4 xl:mb-8'>{abstract}</h5>

             <ImageHolder src={urlFor(headerImage).url()} className='w-full mb-6 xl:mb-10 aspect-video' layout='fill'></ImageHolder>

             <div className='relative'>
                {facebookLink && <a rel="noreferrer" target='_blank' href={facebookLink} className='absolute max-w-[140px] top-0 text-center flex flex-col items-center left-0 transform -translate-x-full text-body-18'>
                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.70161 3.59998H31.3156C32.1976 3.59998 32.8996 4.30198 32.8996 5.18398V30.816C32.8996 31.68 32.1976 32.4 31.3156 32.4H23.9716V21.24H27.7156L28.2736 16.902H23.9716V14.13C23.9716 12.87 24.3316 12.006 26.1316 12.006H28.4356V8.11798C28.0396 8.06398 26.6716 7.95598 25.0876 7.95598C21.7576 7.95598 19.4896 9.97198 19.4896 13.698V16.902H15.7276V21.24H19.4896V32.4H5.70161C5.27983 32.4 4.87506 32.2337 4.57514 31.9371C4.27522 31.6406 4.10435 31.2377 4.09961 30.816V5.18398C4.09961 4.30198 4.81961 3.59998 5.70161 3.59998Z" fill="#BDBDBD"/>
                    </svg>

                    Read on Fanpage

                </a>}

                <PortableText components={stylePortableText} value={body}/>

             </div>
            
            {/* Other Posts section */}
             <div>
                <h2 className='mt-6 mb-3 font-bold xl:mb-5 xl:mt-10 text-headline-37 text-primary-500'>Other Posts</h2>
                <div className='space-y-4 xl:space-y-5'>
                    {relatedPosts.length > 0 && relatedPosts.map(({title, thumbnail, slug, abstract}) => <BlogCard title={title} thumbnail={thumbnail} key={title} slug={slug.current} abstract={abstract}/>)}
                </div>
                
             </div>
          </section>
          <Footer></Footer>

        </main>
     );
}
 
export default Post;


const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    title,
    headerImage,
    abstract,
    body,
    facebookLink,
    relatedPosts[]->{
        title,
        slug,
        thumbnail,
        abstract
    },
}
`

export async function getServerSideProps(context) {
  let slug = context.query.id;

  let data = await sanityClient.fetch( postQuery, {slug});

  return {
    props: {data}, // will be passed to the page component as props
    
  }
}