import Button from '../components/Button'
import PageTitle from '../components/PageTitle'
import EventInfo from '../components/EventInfo'
import Sponsor from '../components/Sponsor'
import Partnershiplp from '../components/Partnership-lp'
import { sanityClient } from '../config/sanity';
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import News from '../components/News'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Whocanjoin from '../components/Whocanjoin'
import Halloffamelp from '../components/Halloffame-lp'
import Footer from "../components/Footer";
import Ourhumanlp from '../components/Ourhuman-lp';
import newbg from '../assets/newbg.png';
import { useState, useEffect } from 'react';
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
    } else {
      timeLeft = {
        Days: 0,
        Hours: 0,
        Minutes: 0,
        Seconds: 0,
      };
    }

    return timeLeft;
  };

  const formatValue = (value) => {
    value = value ?? 0;
    return value < 10 ? `0${value}` : value;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center">
      {Object.entries(timeLeft).map(([unit, value], index, array) => (
        <React.Fragment key={unit}>
          <div className="text-center mx-3 lg:mx-5 mt-2">
            <div className='sm:text-[30px] md:text-[70px] md:pt-2 lg:text-[100px] xl:text-[120px] lg:-mb-4' style={{ fontFamily: "'Brandon Grotesque', sans-serif", fontWeight: 'bold' }}>
              {formatValue(value)}
            </div>
            <div className="text-[12px] sm:text-[15px] md:text-[20px] lg:text-[30px] md:pt-4 lg:text-[30px] font-bold lg:mt-8">{unit}</div>
          </div> 
          {index < array.length - 1 && <div className='hidden lg:flex lg:pb-16 pb-[50px] text-[30px] lg:text-[150px]' style={{ alignSelf: 'flex-end', fontWeight: 'bold' }}>:</div>}
        </React.Fragment>
      ))}
    </div>
  );
};


export default function Home({ data }) {

  const [buttonSize, setButtonSize] = useState('large');

  useEffect(() => {
    const updateButtonSize = () => {
      setButtonSize(window.innerWidth < 992 ? 'small' : 'large');
    };

    window.addEventListener('resize', updateButtonSize);
    updateButtonSize(); // Initialize on component mount

    return () => {
      window.removeEventListener('resize', updateButtonSize);
    };
  }, []);

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


      <div className='pt-10 sm:pt-52 md:pt-[400px] lg:pt-[600px] xl:pt-[700px] 2xl:pt-[800px] absolute flex flex-col items-center w-full ' style={{ zIndex: 2 }} >
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
            {/* <PageTitle className='flex justify-center pt-[200px]' title='GRAB YOUR SPARK NOW' /> */}
          </div>
          <div>
            <div className='flex items-center justify-center w-screen'>
              {/* <div className='inline-flex items-center justify-center text-[30px] lg:text-headline-30 2xl:text-hero-60 xl:text-[40px] tracking-widest lg:leading-10 text-glow-strong box-border xl:w-3/4 lg:h-[300px] lg:border-8 border-4 mx-auto'>
                <Countdown className='' targetDate={new Date('2024-05-18T23:59:59+07:00')} />
              </div> */}
            </div>
            {/* <div className='relative flex justify-center lg:mt-2'>
              <Button
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLScy-Ghgn8gQhRId_V3ggHmD6DFrdsBEROroP685sqDZIOKpXA/viewform', '_blank');
                }}
                isGlow={true}
                type='primary'
                className='animate-bounce-slow font-bold mt-4'
                text={'Registration for Closing Ceremony'}
                size={buttonSize}
              />
            </div> */}
          </div>
            <PageTitle className='hidden lg:flex justify-center mt-44' title='MARKETING CHALLENGERS' />
            <p className='hidden lg:flex mx-auto p-8 font-bold text-headline-31 xl:w-3/4 pt-0 mt-6 sm:w-095% text-center'>
              Marketing Challengers is a top 3 national competition for Integrated Marketing Communications plans, organized by the RMIT Vietnam Business Club - SGS. With an impressive track record over a decade with 11 seasons, Marketing Challengers takes immense pride in the journey of inspiring and nurturing a vibrant community of marketers across Vietnam.
            </p>
            <div className='hidden lg:flex relative flex justify-center -top-16 lg:-top-2 xl:-top-2 sm:top-6'>
            <Button ref={heroBtn} onClick={() => { route.push('/aboutus') }} isGlow={true} type='primary' className=' animate-bounce-slow font-bold' text={'About Marketing Challengers'} size='large'></Button>
          </div>

        </div>


      </div>
      {/* <Timeline ></Timeline>
      <div className='pb-[450px]'><Awardstructure></Awardstructure></div> */}
      <div><EventInfo></EventInfo></div>
      <div><Sponsor></Sponsor></div>
      <div><Partnershiplp></Partnershiplp></div>
      <div><Halloffamelp></Halloffamelp></div>
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
