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
import bg from '../assets/season13/HOMEPAGE/bg.png';
import typ from '../assets/season13/HOMEPAGE/TYPE.png';
import kv from '../assets/season13/HOMEPAGE/MASCOT_KV.png';
import tach from '../assets/season13/HOMEPAGE/TÁCH.png';
import boy from '../assets/season13/HOMEPAGE/BOY.png';
import road from '../assets/season13/HOMEPAGE/ROAD.png';


const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      Day: 0,
      Hour: 0,
      Minute: 0,
      Second: 0,
    };

    if (difference > 0) {
      timeLeft = {
        Day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hour: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Minute: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        Second: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-2">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className="flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-b from-gray-600 to-black text-white shadow-md"
            style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(to bottom, #4B5563, #000000)',
              border: '1px solid #4B5563',
            }}
          >
            <div className="text-[28px] md:text-[40px] font-bold">{formatValue(value)}</div>
          </div>
          <div className="text-[10px] md:text-[14px] font-medium uppercase tracking-wide text-white mt-2">
            {label.toLowerCase()}(s)
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home({ data }) {
  const router = useRouter();

  return (
    <main className="relative w-full min-h-screen pt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-no-repeat bg-cover opacity-30 z-1 h-[800px]"

        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></div>
    
      <Head>
        <title>Marketing Challengers Season 13</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favi.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favi-lg.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Marketing Challengers is a nationwide marketing competition for undergraduate students in Vietnam organized by RMIT Vietnam Business Club (SGS)"
        />
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PKTX2148C4');
        `}
      </Script>

      <div className="relative w-full h-screen">
        {/* Tach behind boy */}
        <div
          className="absolute left-[-18%] top-[35%] transform -translate-y-1/2 w-1/2 h-[1000px] z-[30]"
          style={{
            backgroundImage: `url(${tach.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            
          }}
        ></div>

        {/* Road below boy and kv */}
        <div
          className="absolute bottom-[-20%] left-0 w-full h-[1000px] z-[3] rotate-[120px]"
          style={{
            backgroundImage: `url(${road.src})`,
            backgroundSize: '300% cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-400px -500px',
          
          }}
        ></div>

        <div
          className="absolute left-[14%] top-[75%] transform -translate-y-1/2 w-1/3 h-[200px]"
          style={{
            backgroundImage: `url(${kv.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 60,
          }}
        ></div>

        {/* Boy on left, in front of kv and tach */}
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full"
          style={{
            backgroundImage: `url(${boy.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 40,
          }}
        ></div>

        {/* Type (text) on right, above timer */}
        <div
          className="absolute right-0 top-1/4 transform -translate-y-1/2 w-1/2 h-full"
          style={{
            backgroundImage: `url(${typ.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 50,
          }}
        ></div>

        {/* Countdown Timer below type */}
        <div className="absolute right-10 top-[75%] transform -translate-y-1/2 z-[60] flex flex-col items-center space-y-4">
          {/* Timer */}
          <Countdown targetDate={new Date('2025-07-03T23:59:59+07:00')} />

          {/* Register Now - bigger yellow button */}
          <Button
            onClick={() => router.push('/register')}
            text="REGISTER NOW!"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-4xl px-10 py-5 rounded-full shadow-md w-[350px] h-[80px]"
      
          />

          {/* Our Booklet - smaller purple gradient button */}
          <Button
            onClick={() => router.push('/booklet')}
            text="OUR BOOKLET"
            className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm w-[3  00px]"
          />
        </div>
      </div>
      <Footer></Footer>
    </main>
    
  );
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
