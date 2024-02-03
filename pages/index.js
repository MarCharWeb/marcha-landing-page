import Button from '../components/Button'
import Hero from '../components/Hero'
import ImageHolder from '../components/ImageHolder'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'
import AboutUsImg from '../assets/about-us.jpg'
import Timeline from '../components/Timeline'
import Award from '../components/Award'
import Sponsor from '../components/Sponsor'
import CallToAction from '../components/CallToAction'
import ValueProps from '../components/ValueProps'
import HeroText from '../assets/hero-text.png'
import { sanityClient } from '../config/sanity';
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import News from '../components/News'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Whocanjoin from '../components/Whocanjoin'
import Avabg from '../assets/Ava-background.png'
import Footer from "../components/Footer";
import Leaderboardimg from '../assets/TeamImage/Leaderboard.jpg';

export default function Home({ data }) {

  const heroTextRef = useRef(null);
  const heroBtn = useRef(null);
  useLayoutEffect(() => {
    gsap.from(heroTextRef.current, { opacity: 0, duration: 2, ease: "bounce.out", autoAlpha: 0, delay: 1 })


  }, [])

  const route = useRouter();


  return (
    <main className='' style={{
      backgroundImage: `url(${Avabg.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '0%',
      zIndex: '2',
    }} >
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PKTX2148C4');
        `}
      </Script>
      <Head>
        <title>Marketing Challengers Season 12</title>
        <link rel="icon" type="image/png" sizes='16x16' href="/favi.png"></link>
        <link rel="icon" type="image/png" sizes='32x32' href="/favi-lg.png"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Marketing Challengers is a nationwide marketing competition for undergraduate students in Vietnam organized by RMIT Vietnam Business Club (SGS)" />

      </Head>

      <Hero>
        <div className='absolute flex flex-col pt-20 xl:pt-[150px] 2xl:pt-40 items-center w-full' style={{ zIndex: 2 }} >
          <div>
            <PageTitle type={2} title='MARKETING CHALLENGERS'></PageTitle>
            <ImageHolder ref={heroTextRef} priority={true} src={HeroText} alt="marketing-challengers-ss11-slogan" className={'w-56 h-56 lg:w-64 lg:h-64 xl:w-[583px] mx-auto xl:h-[583px] transform -translate-y-10 lg:-translate-y-18 xl:-translate-y-20 sm:pt-10'}></ImageHolder>
            <PageTitle className='hidden lg:flex justify-center' title='MARKETING CHALLENGERS' />
            <p className='hidden lg:flex text-center mx-auto p-8 font-bold text-headline-31 xl:w-2/3 pt-0 mt-6 sm:w-90%'>
              Marketing Challengers is a top 3 national competition for Integrated Marketing Communications plans, organized by the RMIT Vietnam Business Club - SGS. With an impressive track record over a decade with 11 seasons, Marketing Challengers takes immense pride in the journey of inspiring and nurturing a vibrant community of marketers across Vietnam.
            </p>

          </div>

          <div className='relative flex justify-center -top-16 lg:-top-2 xl:-top-2 sm:top-6'>
            <Button ref={heroBtn} onClick={() => { route.push('/aboutus') }} isGlow={true} type='primary' className=' animate-bounce-slow font-bold' text={'About Marketing Challengers'} size='large'></Button>
          </div>

        </div>
      </Hero>

      <ValueProps></ValueProps>

      {/* text-[30px] lg:text-headline-30 invisible hero-title 2xl:text-hero-60 xl:text-[60px] tracking-widest leading-10  lg:text-glow-strong  text-primary-500 */}
      {/* <Timeline></Timeline> */}

      <Sponsor></Sponsor>


      {/* <Award></Award> */}
      {/* <CallToAction></CallToAction> */}
      <News featurePosts={data}></News>
      <Whocanjoin></Whocanjoin>
      {/* <Rules></Rules> */}
      <Footer></Footer>
    </main>
  )
}

const featurePostQuery = `*[_type == "post" && featured == true]{
    title,
    slug,
    thumbnail,
}
`


export async function getServerSideProps(context) {
  let data = await sanityClient.fetch(featurePostQuery);

  return {
    props: { data }, // will be passed to the page component as props

  }
}
