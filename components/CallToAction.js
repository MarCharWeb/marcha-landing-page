import Button from "./Button";
import ImageHolder from "./ImageHolder";
import SectionTitle from "./SectionTitle";
import CtaIllus from '../assets/cta-illustration.png'

const CallToAction = () => {
    return ( <section className="py-12 lg:py-14 xl:py-28 media-padding-left relative bg-[url('../assets/value-bg.png')]">
        <div className="space-y-4 xl:space-y-6">
                <h2 className={"font-black text-headline-48 lg:text-display-64 xl:text-hero-80 text-primary-500 border-text md:max-w-[65%] lg:max-w-[70%] xl:max-w-[60%] text-glow-strong"}>Ready to unlock you MarTech DNA?</h2> 
                <Button size="large" text={'Register Now!'}></Button>
            </div>

            <ImageHolder src={CtaIllus} alt="marketing-challengers-season11-register" style={{position: 'absolute'}}  className={'w-[450px] lg:w-[500px] xl:w-[725px] -top-1/4 md:-top-full right-0 aspect-[1/1.8]'}></ImageHolder>
    </section> );
}
 
export default CallToAction;