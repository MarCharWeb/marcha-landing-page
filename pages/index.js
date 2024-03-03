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
import HeroText from '../assets/spark.png'
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
import Ourhumanlp from '../components/Ourhuman-lp';
import Awardstructure from '../components/awardstructure';
import newbg from '../assets/newbg.png';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import LayerImage from '../assets/layer.png';
import React from 'react';



const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        Seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center">
      {Object.entries(timeLeft).map(([unit, value], index, array) => (
        <React.Fragment key={unit}>
          <div className="text-center" style={{ margin: '20px' }}>
            <div style={{ fontFamily: "'Brandon Grotesque', sans-serif", fontSize: '150px', fontWeight: 'bold' }}>
              {formatValue(value)}
            </div>
            <div className="text-sm font-bold mt-8">{unit}</div>
          </div>
          {index < array.length - 1 && <div className='pb-20' style={{ alignSelf: 'flex-end', fontSize: '150px', fontWeight: 'bold' }}>:</div>}
        </React.Fragment>
      ))}
    </div>
  );
  
};


export default function Home({ data }) {

  const heroTextRef = useRef(null);
  const heroBtn = useRef(null);
  useLayoutEffect(() => {
    gsap.from(heroTextRef.current, { opacity: 0, duration: 2, ease: "bounce.out", autoAlpha: 0, delay: 1 })


  }, [])

  const route = useRouter();


  return (
    <main className="" style={{
      backgroundImage: `url(${LayerImage.src}), url(${newbg.src})`,
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundPosition: '0% 0%, 0% 0%',
      backgroundSize: '100% auto, cover',  // Adjust as per your requirement
      backgroundAttachment: 'scroll, fixed',
    }}>
      <div className="w-full">
      </div>
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


      <div className='absolute flex flex-col pt-20 xl:pt-[150px] 2xl:pt-40 items-center w-full' style={{ zIndex: 2 }} >
        <div>
          <div className='' 
          // style={{
          //   backgroundImage: `url(${LayerImage.src})`,
          //   backgroundSize: '100% auto',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundPosition: '0% 0%',
          //   zIndex: 2,}}
            >
            {/* <PageTitle type={2} title='MARKETING CHALLENGERS'></PageTitle> */}
            {/* <ImageHolder ref={heroTextRef} priority={true} src={HeroText} alt="marketing-challengers-ss12-slogan" className={'w-56 h-56 lg:w-64 lg:h-64 xl:w-[583px] mx-auto xl:h-[583px] transform -translate-y-10 lg:-translate-y-18 xl:-translate-y-20 sm:pt-10'}></ImageHolder>           */}
          <PageTitle className='hidden lg:flex justify-center mb-6 pt-[1200px]' title='GRAB YOUR SPARK NOW' />
          </div>
          <div>
            <div className='flex items-center justify-center text-[30px] lg:text-headline-30 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong box-border w-3/4 h-[300px] border-8 mx-auto pt-8'>
              <Countdown targetDate={new Date('2024-04-03T20:00:00+07:00')} />
            </div>
            <div className='relative flex justify-center -top-16 lg:-top-2 xl:-top-2 sm:top-6 mt-12'>
              <Button ref={heroBtn} onClick={() => {
                window.location.href = 'https://forms.gle/K8kAi7rJqWZ1uqan9';
              }} isGlow={true} type='primary' className=' animate-bounce-slow font-bold' text={'REGISTER NOW'} size='large'></Button>
            </div>
            <div className='pl-4 space-y-0 lg:space-y-1'>
              <p className='text-center text-headline-31 font-bold text-glow-strong mt-2'>More information:</p>
            </div>
            <div className='relative flex justify-center -top-16 lg:-top-2 xl:-top-2 sm:top-6 mt-6'>
              <Button ref={heroBtn} onClick={() => {
                window.location.href = 'https://quickom.net/event/opening-ceremony-marketing-challengers-1564?zarsrc=1303&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo';
              }} isGlow={true} type='primary' className=' animate-bounce-slow font-bold' text={'Registration for Opening Ceremony'} size='large'></Button>
            </div>
          </div>
          <PageTitle className='hidden lg:flex justify-center mt-20' title='MARKETING CHALLENGERS' />
          <p className='hidden lg:flex mx-auto p-8 font-bold text-headline-31 xl:w-3/4 pt-0 mt-6 sm:w-095% text-center'>
            Marketing Challengers is a top 3 national competition for Integrated Marketing Communications plans, organized by the RMIT Vietnam Business Club - SGS. With an impressive track record over a decade with 11 seasons, Marketing Challengers takes immense pride in the journey of inspiring and nurturing a vibrant community of marketers across Vietnam.
          </p>

        </div>
        <div className='relative flex justify-center -top-16 lg:-top-2 xl:-top-2 sm:top-6'>
          <Button ref={heroBtn} onClick={() => { route.push('/aboutus') }} isGlow={true} type='primary' className=' animate-bounce-slow font-bold' text={'About Marketing Challengers'} size='large'></Button>
        </div>

      </div>

      {/* <ValueProps></ValueProps> */}

      {/* text-[30px] lg:text-headline-30 invisible hero-title 2xl:text-hero-60 xl:text-[60px] tracking-widest leading-10  lg:text-glow-strong  text-primary-500 */}
      <Timeline></Timeline>
      <div className='pb-[450px]'><Awardstructure></Awardstructure></div>
      <div><Sponsor></Sponsor></div>


      {/* <Award></Award> */}
      {/* <CallToAction></CallToAction> */}
      <News featurePosts={data}></News>
      <Ourhumanlp></Ourhumanlp>
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
