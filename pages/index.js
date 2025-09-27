import Button from '../components/Button';
import { sanityClient } from '../config/sanity';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from "next/link";
import { useRouter } from 'next/router';
import Footer from "../components/Footer";
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
    <div className="flex flex-col items-center w-[85vw] max-w-[300px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] mx-auto mt-3 sm:mt-4 md:mt-6 lg:mt-8">
  <div className="relative w-full h-[12vw] max-h-[60px] sm:max-h-[70px] md:max-h-[80px] lg:max-h-[96px] scale-95 sm:scale-100 md:scale-110 lg:scale-120 flex justify-center items-center pt-1 sm:pt-0.5 md:pt-0 lg:pt-0">
    <img
      src="/season13/ABOUT US/clock.png"
      alt="Clock background"
      className="absolute inset-0 w-full h-[80%] sm:h-[85%] md:h-[90%] lg:h-full object-contain pointer-events-none"
    />
    <div className="relative z-10 flex justify-between w-full px-1 sm:px-2 md:px-3 lg:px-4 gap-0 sm:gap-0 md:gap-2 lg:gap-10">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex items-center justify-center w-1/4">
          <div className="text-white font-bold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[44px]  font-mono tracking-tight">
            {formatValue(value)}
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="flex justify-between w-full max-w-[340px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[400px] px-1 sm:px-2 md:px-3 lg:px-4 mt-0 md:mt-1.5 lg:mt-2 gap-0 sm:gap-4 md:gap-10 lg:gap-12">
    {Object.entries(timeLeft).map(([label]) => (
      <div key={label} className="w-1/4 text-center text-white text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] font-medium tracking-wide font-sans">
        {label.toLowerCase()}(s)
      </div>
    ))}
  </div>
</div>
  );
};

export default function Home({ data }) {
  const router = useRouter();

  return (
    <main className="relative w-full" style={{ backgroundColor: 'transparent' }}>
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

      {/* HOME1.svg Section with Countdown and Buttons */}
      <section
        className="relative z-[99]] w-full overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="relative w-full"
          style={{
            backgroundImage: `url(/season13/IMAGE/HOME1.svg)`,
            backgroundSize: "100vw auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center -20%",
            width: "100vw",
            paddingBottom: "0%",
            position: "relative",
          }}
        >
          <img
            src="/season13/IMAGE/HOME1.svg"
            alt="home background"
            className="w-screen h-auto object-contain"
            style={{ objectFit: "contain", display: "block" }}
          />
        </div>
<div className="absolute top-[30%] w-full flex flex-col items-center right-[-15%] justify-center z-[2] pt-8 sm:pt-10 md:pt-12 v lg:pt-14"
style={{ transform: "translateY(-50px)" }}>
  {/* <Countdown targetDate={new Date('2025-07-31T23:59:59+07:00')} /> */}
  <div className="flex flex-col items-center space-y-3 mt-3 sm:mt-4 md:mt-6 lg:mt-8">
    <a href="https://drive.google.com/drive/folders/1KqRmYs4pWwd1FdzOBi-lsSSichVc2vMw?usp=drive_link" passHref target="_blank" rel="noopener noreferrer">
    <Button
   
      text="Explore more!"
      isPrimary={false}
      className="bg-gradient-to-bl from-[#ECE75F] via-white to-[#ECE75F] text-[#5A189A] pointer-events-auto hover:text-[#2D033F] font-extrabold 
               text-caption-14 sm:text-caption-14 md:text-lg lg:text-headline-26 
               px-4 sm:px-4 md:px-6 lg:px-10 py-2 sm:py-2 md:py-3 lg:py-5 rounded-full 
               w-[200px] sm:w-[200px] md:w-[300px] lg:w-[400px] h-[50px] sm:h-[50px] md:h-[60px] lg:h-[90px] 
               shadow-[0_1px_0_#cc9900] sm:shadow-[0_1px_0_#cc9900] md:shadow-[0_2px_0_#cc9900] lg:shadow-[0_4px_0_#cc9900] 
               hover:shadow-[0_2px_0_#b58000] sm:hover:shadow-[0_2px_0_#b58000] md:hover:shadow-[0_3px_0_#b58000] lg:hover:shadow-[0_6px_0_#b58000]
               transition duration-150 ease-in-out hover:scale-100 sm:hover:scale-100 md:hover:scale-102 lg:hover:scale-105"
    />
    </a>
    {/* <a href="https://drive.google.com/drive/folders/1KqRmYs4pWwd1FdzOBi-lsSSichVc2vMw?usp=drive_link" passHref target="_blank" rel="noopener noreferrer">
    <Button
      text="OUR BOOKLET"
      isPrimary={false}
      className="!text-white text-[16px] sm:text-[18px] md:text-[24px] lg:text-headline-21 font-semibold pointer-events-auto 
               px-3 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-1.5 md:py-2 lg:py-3 rounded-full 
               w-[180px] sm:w-[180px] md:w-[240px] lg:w-[300px] h-[35px] sm:h-[35px] md:h-[45px] lg:h-[60px] 
               shadow-none sm:shadow-none md:shadow-none lg:shadow-sm 
               hover:shadow-none sm:hover:shadow-none md:hover:shadow-sm lg:hover:shadow-lg
               bg-gradient-to-r from-[#93089f] to-[#bb5cba] border-2 border-[#2D033F]
               transition duration-300 ease-in-out hover:scale-100 sm:hover:scale-100 md:hover:scale-102 lg:hover:scale-105
               whitespace-nowrap tracking-tight"
    />
    </a> */}
  </div>
</div>
      </section>

      {/* AboutUs Page */}
      <img
        src="/season13/IMAGE/ABOUTHOME1.png"
        alt="sponsorship background"
        className="w-screen h-auto object-contain block"
      />
     <div className="relative w-screen">
      {/* Background image */}
      <img
        src="/season13/IMAGE/ABOUTHOME2.png"
        alt="sponsorship background"
        className="w-screen h-auto object-contain block"
      />

      {/* Overlay TEAM.png in the center */}
      <Link href="/aboutus">
        <img
          src="/season13/IMAGE/TEAM.JPG"
          alt="team"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 sm:scale-85 cursor-pointer"
        />
      </Link>
    </div>

      {/* Sponsor Page */}
      <section className="relative w-full">
  <img
    src="/season13/IMAGE/SPONSORHOME.png"
    alt="sponsorship background"
    className="w-screen h-auto object-contain block"
  />

  <div
    className="
      absolute left-1/2 transform -translate-x-1/2
      bottom-[12%] sm:bottom-[10%] md:bottom-[8%] lg:bottom-[6%]
      z-20 pointer-events-none
    "
  >
    <Link href="/sponsor" passHref>
      <Button
        text="Explore our 2025 season sponsors."
        isPrimary={false}
        className="
          !bg-[#ECE75F] !text-[#5A189A] font-extrabold
          rounded-full
          px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
          text-lg sm:text-xl md:text-2xl
          min-w-[150px] sm:min-w-[180px] md:min-w-[800px]
          max-w-[250px]
          shadow-md
          hover:scale-105 transition-transform duration-300
          pointer-events-auto
        "
      />
    </Link>
  </div>
</section>
          

      {/* Terms Page */}
      <Terms />

      <section
  className="relative z-[1] w-full"
  style={{ backgroundColor: "transparent" }}
>
  <div
    className="relative w-full min-h-[100vh] sm:min-h-[80vh] md:min-h-[60vh] lg:min-h-[auto]"
    style={{
      backgroundImage: `url(/season13/IMAGE/HOME4.svg)`,
      backgroundSize: "100vw auto",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center top",
      width: "100vw",
    }}
  >
    <img
      src="/season13/IMAGE/HOME4.svg"
      alt="home footer background"
      className="w-screen h-auto object-contain"
      style={{ objectFit: "contain", display: "block" }}
    />
  </div>
  <div
    className="absolute bottom-0 w-full bg-transparent z-[10] "
  >
    <Footer />
  </div>
</section>
    </main>
  );
}

const featurePostQuery = `*[_type == "post" && featured == true]{ title, slug, thumbnail }`;

export async function getServerSideProps(context) {
  const data = await sanityClient.fetch(featurePostQuery);
  return { props: { data } };
}