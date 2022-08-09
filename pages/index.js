import Button from '../components/Button'
import Hero from '../components/Hero'
import ImageHolder from '../components/ImageHolder'
import PageTitle from '../components/PageTitle'
import RegisterStats from '../components/RegisterStats'
import SectionTitle from '../components/SectionTitle'
import AboutUsImg from '../assets/about-us.jpg'
import Timeline from '../components/Timeline'
import Award from '../components/Award'
import Sponsor from '../components/Sponsor'
import CallToAction from '../components/CallToAction'
import News from '../components/News'
export default function Home() {
  return (
    <main >
        <Hero>
          <PageTitle type={2} title='Marketing Challengers'></PageTitle>
          <p className='mt-8 text-center mb-14 text-headline-31'>The go-to Marketing playground for Creative Seekers </p>

          <div className='flex items-center justify-center gap-5'>
           <div className='flex items-center gap-3'><RegisterStats number={70}></RegisterStats> contestants have been on board <p></p></div>
            {/* Decorating line */}
            <div className='w-[100px] h-[1px] bg-gradient-to-r from-[#F9FDFE]/0 to-[#F9FDFE]/70'></div>
  
            <Button isGlow={true} type='primary' text={'Grab your spark now!'} size='large'></Button>
          </div>
        </Hero>

        {/* About Us  */}
        <section id='about-marketing-challengers' className='relative z-[1] grid items-center grid-cols-2 mt-10 2xl:mt-20 mb-28 media-padding-right'>

            {/* Glow Effect in background  */}
            <svg className='absolute top-0 right-0 transform -translate-y-1/2' width="700" height="1400" viewBox="0 0 700 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_232_2027)">
            <rect x="500" y="500" width="400" height="400" rx="200" fill="#F49402"/>
            <rect x="500.5" y="500.5" width="399" height="399" rx="199.5" stroke="#7751A4"/>
            </g>
            <defs>
            <filter id="filter0_f_232_2027" x="0" y="0" width="1400" height="1400" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_232_2027"/>
            </filter>
            </defs>
            </svg>

            <ImageHolder src={AboutUsImg} alt='about-marketing-challengers' className={'aspect-[1/1.2] before:absolute before:inset-0 before:z-[1] before:bg-bg-900/20 rounded overflow-hidden'}></ImageHolder>
            <div className='pl-[120px]'>
              <SectionTitle className={'mb-6 text-left'} text='About Us'></SectionTitle>

              <div className='mb-10 space-y-3'>
                <h4 className='font-bold text-headline-37 '>Introduction</h4>
                <p>Marketing Challengers is a nationwide marketing competition organized by Business Club of RMIT University Vietnam (SGS).</p>
              </div>

              <div className='mb-10 space-y-3'>
                <h4 className='font-bold text-headline-37 '>Vision</h4>
                <p>To become the best student-run marketing competition for students.</p>
              </div>
              
              <div className='space-y-3'>
                <h4 className='font-bold text-headline-37 '>Mission</h4>
                <p>To provide students, regardless of their marketing foundation, a practical playground to develop an Integrated Marketing Communication (IMC) Plan and an opportunity to pitch their ideas to real famous client brands.</p>
              </div>

            </div>
        </section>

        <Timeline></Timeline>

        <Award></Award>
        <Sponsor></Sponsor>
        <CallToAction></CallToAction>
        <News></News>
        
    </main>
  )
}
