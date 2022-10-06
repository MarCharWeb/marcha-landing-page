import ImageHolder from "./ImageHolder";
import HeroBg2 from '../assets/hero-bg-2.png'

const Hero = ({children}) => {
return ( <header className="relative grid grid-cols-1 col-span-1 grid-row-1 row-span-1 z-[10] w-full bg-[url('../assets/hero-bg-1.png')] xl:min-h-[1440px] 2xl:min-h-[2000px] h-[1000px] bg-center	bg-cover bg-no-repeat   ">

        <ImageHolder src={HeroBg2} priority={true} layout='fill' className='w-full h-[1000px] xl:h-[1440px] 2xl:h-[2000px] top-0 after:absolute after:inset-0 after:bg-gradient-to-b after:from-bg-500/50 after:to-bg-500/10 '  alt="marketing-challengers-background"></ImageHolder>
       
        {children}
        
    </header> );
}
 
export default Hero;