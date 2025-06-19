import Button from '../components/Button';
import EventInfo from '../components/EventInfo';
import Sponsor from '../components/Sponsor';
import Partnershiplp from '../components/Partnership-lp';
import { sanityClient } from '../config/sanity';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Footer from "../components/Footer";
import Ourhumanlp from '../components/Ourhuman-lp';
import AboutUs from './aboutus';
import Sponsors from './sponsor';
import Terms from '../components/Terms';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    return {
      Day: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hour: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      Minute: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      Second: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const formatValue = (value) => (value < 10 ? `0${value}` : `${value}`);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-[90vw] max-w-[360px] mx-auto mt-4 sm:mt-6 md:mt-8">
      <div className="relative w-full h-[14vw] max-h-[70px] sm:max-h-[84px] md:max-h-[96px] scale-100 sm:scale-110 md:scale-120 flex justify-center items-center pt-2 sm:pt-1 md:pt-0">
        <img
          src="/season13/ABOUT US/clock.png"
          alt="Clock background"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
        <div className="relative z-10 flex justify-between w-full px-2 sm:px-3 md:px-4 gap-0 sm:gap-2 md:gap-6">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex items-center justify-center w-1/4">
              <div className="text-white font-bold text-[32px] sm:text-[40px] md:text-[44px] font-mono tracking-tight">
                {formatValue(value)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full max-w-[400px] px-2 sm:px-3 md:px-4 mt-1 sm:mt-1.5 md:mt-2 gap-12">
        {Object.entries(timeLeft).map(([label]) => (
          <div key={label} className="w-1/4 text-center text-white text-[8px] sm:text-[10px] md:text-[12px] font-medium tracking-wide font-sans">
            {label.toLowerCase()}(s)
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default function Home({ data }) {
  const router = useRouter();

  return (
    <main className="relative w-full min-h-screen" style={{ backgroundColor: '#2D033F' }}>
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-full min-h-screen opacity-30 z-0"
        style={{
          backgroundImage: `url(/season13/HOMEPAGE/bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      />

      <Head>
        <title>Marketing Challengers Season 13</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favi.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favi-lg.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Marketing Challengers is a nationwide marketing competition for undergraduate students in Vietnam organized by RMIT Vietnam Business Club (SGS)" />
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PKTX2148C4');
      `}</Script>

      <div className="flex flex-wrap-reverse w-full pointer-events-none justify-center h-full">
  {/* container 2 (right visually, comes first in code) */}
  <div className="order-2 w-1/2 h-screen min-w-[500px] relative overflow-visible flex flex-col items-center justify-center">
    {/* Countdown and buttons */}
    <div
      className="w-full h-[20vh] sm:h-[30vh] md:h-[40vh] pointer-events-none"
      style={{
        backgroundImage: `url(/season13/HOMEPAGE/TYPE.png)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 50,
      }}
    ></div>
    <div className="flex flex-col items-center space-y-4 w-[90%] sm:w-[80%] md:w-[50%] max-w-[450px] z-[60] mt-[-10%] sm:mt-[-5%] md:mt-0">
      <Countdown targetDate={new Date('2025-07-03T23:59:59+07:00')} />
      <div className="flex flex-col items-center space-y-4">
        <Button
          onClick={() => router.push('/register')}
          text="REGISTER NOW!"
          isPrimary={false}
          className="bg-[#ECE75F] text-[#2D033F] pointer-events-auto hover:text-[#2D033F] font-extrabold text-headline-21 md:text-headline-31 
                     px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full w-[80%] sm:w-[90%] md:w-[400px] h-[60px] sm:h-[70px] md:h-[90px] 
                     shadow-[0_4px_0_#cc9900] hover:shadow-[0_6px_0_#b58000] 
                     transition duration-150 ease-in-out hover:scale-105"
        />
        <Button
          onClick={() => router.push('/booklet')}
          text="OUR BOOKLET"
          isPrimary={false}
          className="!text-white text-small-16 md:text-headline-21 font-semibold pointer-events-auto px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full shadow-sm w-[60%] sm:w-[70%] md:w-[300px] h-[50px] sm:h-[55px] md:h-[60px] 
                     bg-gradient-to-r from-[#93089f] to-[#bb5cba] border-2 border-[#2D033F]
                     transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        />
      </div>
    </div>
  </div>

  {/* container 1 (left visually, comes second in code so it wraps first) */}
  <div className="order-1 w-1/2 relative h-screen overflow-visible">
    <div className="relative h-[800px]">
      <div
        className="absolute bottom-[-50%] left-[-50%] left-at-1000 w-screen h-full z-3"
        style={{
          backgroundImage: `url(/season13/HOMEPAGE/ROAD_FULL.png)`,
          backgroundSize: '300% cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
      ></div>
      <div
        className="absolute z-[30] scale-[200%] w-full h-full left-[-50%]"
        style={{
          backgroundImage: `url(/season13/HOMEPAGE/TÁCH.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
      <div
        className="absolute scale-[30%] w-full h-full left-0 top-[30%]"
        style={{
          backgroundImage: `url(/season13/HOMEPAGE/MASCOT_KV.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: 60,
        }}
      ></div>
      <div
        className="absolute scale-[90%] w-full h-full left-[-25%] top-[10%]"
        style={{
          backgroundImage: `url(/season13/HOMEPAGE/BOY.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: 40,
        }}
      ></div>
    </div>
  </div>
</div>

      <div className="h-[150px] sm:h-[200px] md:h-[350px]" />
      <AboutUs hideFooter={true} />
      <Sponsors hideFooter={true} />
      <Terms />

      <div className="relative w-full">
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-[length:150vh] opacity-50 pointer-events-none scale-x-[-1] max-h-full"
          style={{
            backgroundImage: `url(/season13/HOMEPAGE/3SON.png)`,
            backgroundPosition: 'left 80% bottom -20vh',
          }}
        />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </main>
  );
}

const featurePostQuery = `*[_type == "post" && featured == true]{ title, slug, thumbnail }`;

export async function getServerSideProps(context) {
  const data = await sanityClient.fetch(featurePostQuery);
  return { props: { data } };
}
