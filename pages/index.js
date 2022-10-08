import Button from '../components/Button'
import Hero from '../components/Hero'
import ImageHolder from '../components/ImageHolder'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'
import AboutUsImg from '../assets/about-us.png'
import Timeline from '../components/Timeline'
import Award from '../components/Award'
import Sponsor from '../components/Sponsor'
import CallToAction from '../components/CallToAction'
import ValueProps from '../components/ValueProps'
import HeroText from '../assets/hero-text.png'
import { sanityClient } from '../config/sanity';


import News from '../components/News'
export default function Home({data}) {
  // console.log(data)
  return (
    <main >
        <Hero>
          <div className='absolute flex flex-col pt-20 xl:pt-[150px] 2xl:pt-40 items-center w-full '>
            <div>
                <PageTitle type={2} title='Marketing Challengers'></PageTitle>
                <ImageHolder priority={true} src={HeroText} alt="marketing-challengers-ss11-slogan" className={'w-56 h-56 lg:w-64 lg:h-64 xl:w-[583px] mx-auto xl:h-[583px] transform -translate-y-10 lg:-translate-y-18 xl:-translate-y-20'}></ImageHolder>
                <div className='relative flex justify-center -top-16 lg:-top-20 xl:-top-32'>
                  <Button  isGlow={true}  type='primary' text={'Grab your spark now!'} size='large'></Button>
                </div>
                
            </div>
            
          </div>
          
        </Hero>

        <ValueProps></ValueProps>
        {/* About Us  */}
        <section id='about-marketing-challengers' className='relative z-10 grid items-center grid-cols-1 mt-10 mb-10 lg:-mt-10 2xl:-mt-40 xl:-mt-20 lg:grid-cols-2 xl:mb-28 media-padding-right'>

            {/* Glow Effect in background  */}
            <svg className='absolute top-0 right-0 transform -translate-y-1/2' width="700" height="1400" viewBox="0 0 700 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_232_2027)">
            <rect x="500" y="500" width="400" height="400" rx="200" fill="#F49402"/>
            <rect x="500.5" y="500.5" width="399" height="399" rx="199.5" stroke="#7751A4"/>
            </g>
            <defs>
            <filter id="filter0_f_232_2027" x="0" y="0" width="1400" height="1400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_232_2027"/>
            </filter>
            </defs>
            </svg>

            <ImageHolder src={AboutUsImg} alt='about-marketing-challengers' className={'hidden lg:block lg:aspect-square xl:aspect-4/3 rounded overflow-hidden'}></ImageHolder>
            <div className='pl-4 md:pl-10 xl:pl-[133px] 2xl:pl-[200px]'>
              <SectionTitle className={'mb-3 xl:mb-6 text-left'} type='left' text='About Us'></SectionTitle>

              <div className='space-y-0 lg:space-y-1 xl:space-y-2.5 mb-4 xl:mb-7'>
                <h4 className='font-bold text-headline-31 lg:text-headline-37 '>Introduction</h4>
                <p className=' max-w-prose'>Marketing Challengers is a nationwide marketing competition organized by Business Club of RMIT University Vietnam (SGS).</p>
              </div>

              <div className='space-y-0 lg:space-y-1 xl:space-y-2.5 mb-4 xl:mb-7'>
                <h4 className='font-bold text-headline-31 lg:text-headline-37 '>Vision</h4>
                <p>To become the best student-run marketing competition for students.</p>
              </div>
              
              <div className='space-y-0 lg:space-y-1 xl:space-y-2.5'>
                <h4 className='font-bold text-headline-31 lg:text-headline-37 '>Mission</h4>
                <p className=' max-w-prose'>To provide students, regardless of their marketing foundation, a practical playground to develop an Integrated Marketing Communication (IMC) Plan and an opportunity to pitch their ideas to real famous client brands.</p>
              </div>

            </div>
        </section>

        <Timeline></Timeline>

        {/* <Award></Award> */}
        <Sponsor></Sponsor>
        <CallToAction></CallToAction>
        <News featurePosts={data}></News>
        
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
    props: {data}, // will be passed to the page component as props
    
  }
}