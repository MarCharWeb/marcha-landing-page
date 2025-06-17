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
      <div className="relative w-[420px] h-[120px] scale-[120%] right-[15%] mx-auto mt-10">
        <img src="/season13/ABOUT US/clock.png" alt="Clock background" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
        <div className="relative z-10 flex justify-between h-full px-4 text-white font-bold text-[48px] md:text-[60px] font-mono tracking-tight gap-[40px]">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="w-1/4 text-center flex items-center justify-center">
              {formatValue(value)}
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-center mx-auto text-white text-[12px] md:text-[16px] font-medium tracking-wide font-sans gap-[50px]"
        style={{ marginTop: '-6px', marginLeft: '-85px' }}
      >
        {Object.entries(timeLeft).map(([label]) => (
          <div key={label} className="min-w-[80px] text-center">
            {label.toLowerCase()}(s)
          </div>
        ))}
      </div>
    </>
  );
};

export default function Home({ data }) {
  const router = useRouter();

  return (
    <main className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: '#2D033F' }}>
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain opacity-30 z-0"
        style={{
          backgroundImage: `url(/season13/HOMEPAGE/bg.png)`,
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
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

      <div className="relative w-full min-h-screen">
        <div
          className="absolute left-[-18%] top-[35%] transform -translate-y-1/2 w-1/2 h-[1000px] z-[30]"
          style={{
            backgroundImage: `url(/season13/HOMEPAGE/TÁCH.png)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>

        <div
          className="absolute bottom-[-35%] left-[0%] w-full h-[1000px] z-[3] rotate-[120px]"
          style={{
            backgroundImage: `url(/season13/HOMEPAGE/ROAD_FULL.png)`,
            backgroundSize: '300% cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-400px -500px',
          }}
        ></div>

        <div
          className="absolute left-[14%] top-[75%] transform -translate-y-1/2 w-1/3 h-[200px]"
          style={{
            backgroundImage: `url(/season13/HOMEPAGE/MASCOT_KV.png)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 60,
          }}
        ></div>

        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full"
          style={{
            backgroundImage: `url(/season13/HOMEPAGE/BOY.png)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 40,
          }}
        ></div>

        <div
          className="absolute right-0 top-1/4 transform -translate-y-1/2 w-1/2 h-full"
          style={{
            backgroundImage: `url(/season13/HOMEPAGE/TYPE.png)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 50,
          }}
        ></div>

        <div className="absolute right-10 top-[75%] transform -translate-y-1/2 z-[60] flex flex-col items-center space-y-4">
          <Countdown targetDate={new Date('2025-07-03T23:59:59+07:00')} />
          <div className="flex flex-col items-center space-y-4 translate-x-[-80px]">
            <Button
              onClick={() => router.push('/register')}
              text="REGISTER NOW!"
              isPrimary={false}
              className="bg-[#ECE75F] text-[#2D033F] hover:text-[#2D033F] font-extrabold text-headline-31 
                 px-10 py-5 rounded-full w-[400px] h-[90px] 
                 shadow-[0_4px_0_#cc9900] hover:shadow-[0_6px_0_#b58000] 
                 transition duration-150 ease-in-out hover:scale-105"
            />

            <Button
              onClick={() => router.push('/booklet')}
              text="OUR BOOKLET"
              isPrimary={false}
              className="!text-white font-semibold px-6 py-3 rounded-full shadow-sm w-[300px] 
                 bg-gradient-to-r from-[#93089f] to-[#bb5cba] border-2 border-[#2D033F]
                 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="h-[100px] md:h-[150px] lg:h-[80px]" />
      <AboutUs hideFooter={true} />
      <Sponsors hideFooter={true} />
      <Terms />

      <div className="relative w-full">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/season13/HOMEPAGE/3SON.png)`,
            backgroundSize: '110%',
            backgroundPosition: 'top -260px left 300px',
            backgroundRepeat: 'no-repeat',
            transform: 'scaleX(-1)',
            opacity: 0.5,
            pointerEvents: 'none',
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
