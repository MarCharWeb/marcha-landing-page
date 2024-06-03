import ImageHolder from "../../components/ImageHolder";
import PageTitle from "../../components/PageTitle";
import { sanityClient } from '../../config/sanity';
import BlogCard from "../../components/BlogCard";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import newbg from '../../assets/newbg.png';


const News = ({ data }) => {

    // Blogs showed from the blog list
    const [showList, setShowList] = useState([...data.slice(0, 6)]);
    // State to trigger load more
    const [loadMore, setLoadMore] = useState(false);

    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(data.length > 5)

    // Load more button click
    const handleLoadMore = () => {
        console.log(1)
        setLoadMore(true);
    }

    // Handle loading more articles
    useEffect(() => {
        if (loadMore && hasMore) {
            const currentLength = showList.length
            const isMore = currentLength < data.length;
            const nextResults = isMore
                ? data.slice(currentLength + 1, currentLength + 5)
                : []
            setShowList([...showList, ...nextResults])
            setLoadMore(false)
        }
    }, [loadMore, hasMore, data, showList]);


    //Check if there is more blog to show
    useEffect(() => {
        const isMore = showList.length < data.length; // minus the first blog that is the large blog card on the knowledge page
        setHasMore(isMore);
    }, [showList, data.length]);

    return (
    <div className="bg-fixed"  style={{
        backgroundImage: `url(${newbg.src})`, // Check if .src is correctly providing the URL
        backgroundSize: 'cover', // Ensure background size is set
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', // Adjust the position if needed
        zIndex: 2,
    }}>
    <main className="relative z-[5] sm:pt-12 lg:pt-20 xl:pt-28 xl:pt-32 container-media-padding">
        <Head>
            <title>Marketing Challengers Season 12</title>
            <link rel="icon" type="image/png" sizes='16x16' href="/favi.png"></link>
            <link rel="icon" type="image/png" sizes='32x32' href="/favi-lg.png"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Marketing Challengers is a nationwide marketing competition for undergraduate students in Vietnam organized by RMIT Vietnam Business Club (SGS)" />

        </Head>
        {/* <ImageHolder src={NewsBg} alt='marketing-challengers-season11-news' style={{position: 'absolute'}} className={'w-[125vw] z-[-1] h-screen top-0 left-0 '}/> */}
        <PageTitle type={1} title='BLOGS'></PageTitle>

        <div className="mt-5 space-y-5 xl:space-y-6 xl:mt-14 ">
            {showList.length > 0 && showList.map(({ title, thumbnail, slug, abstract }) => <BlogCard title={title} key={title} thumbnail={thumbnail.asset} slug={slug.current} abstract={abstract} />)}
        </div>

        <div className="flex mt-7 flex-col items-center justify-center gap-1.5">
            <Button
                onClick={handleLoadMore}
                isGlow={true}
                type='primary'
                className='animate-bounce-slow font-bold mt-10 mb-6 sm:mt-4'
                text={'Load More'}
                size='large'
            />
            <p className={"text-button-14 items-center text-grey-200 gap-1 " + (loadMore && !hasMore ? "flex" : 'hidden')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5094 4.3586C13.9677 3.52091 13.0202 3 11.997 3C10.9057 3 9.90039 3.59268 9.37204 4.54763L2.28185 16.7803L2.22055 16.9054L2.14925 17.0999C1.87056 17.9498 1.98496 18.8844 2.46902 19.645C2.99032 20.4642 3.87585 20.9804 4.84555 21.0304L4.96236 21.0297L5.00704 21.0318H19.007L19.2061 21.0238C20.1296 20.9568 20.9705 20.471 21.4864 19.7001C22.039 18.8741 22.1468 17.828 21.774 16.9067L21.7122 16.7803L14.6122 4.5303L14.5094 4.3586ZM11.1796 5.42652C11.373 5.1561 11.6737 5 11.997 5L12.1171 5.00721C12.4333 5.04539 12.7155 5.23293 12.872 5.51588L19.937 17.707L19.9591 17.7737C20.033 18.0499 19.9853 18.347 19.8241 18.5879C19.6399 18.8632 19.3313 19.0295 19 19.0318L5.00704 19.0318L4.957 19.034L4.82881 19.0197C4.55339 18.9718 4.30839 18.8102 4.15635 18.5713L4.0979 18.4659C3.99449 18.2498 3.97214 18.0034 4.03498 17.7722L4.057 17.706L11.1122 5.53321L11.1796 5.42652ZM12.007 9.03175C12.5199 9.03175 12.9425 9.41779 13.0003 9.91513L13.007 10.0318V12.0318C13.007 12.584 12.5593 13.0318 12.007 13.0318C11.4942 13.0318 11.0715 12.6457 11.0138 12.1484L11.007 12.0318V10.0318C11.007 9.47947 11.4548 9.03175 12.007 9.03175ZM13.017 16.0318C13.017 15.4795 12.5693 15.0318 12.017 15.0318L11.8904 15.0385C11.3931 15.0962 11.007 15.5189 11.007 16.0318C11.007 16.584 11.4548 17.0318 12.007 17.0318L12.1337 17.025C12.631 16.9673 13.017 16.5446 13.017 16.0318Z" fill="#F9D0D9" />
                </svg>

                <span>You have seen all the posts</span>
            </p>
        </div>
    </main>
    <Footer></Footer>
    </div>
    );
}

export default News;

const allPostQuery = `*[_type == "post"]{
    title,
    slug,
    thumbnail,
    abstract
}
`


export async function getServerSideProps(context) {
    let data = await sanityClient.fetch(allPostQuery);

    return {
        props: { data }, // will be passed to the page component as props

    }
}
