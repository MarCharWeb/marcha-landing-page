import ImageHolder from "./ImageHolder";
import ValueBg from '../assets/value-bg.png'
import SectionTitle from "./SectionTitle";
import Value from "./Value";
import AudioBook from '../assets/audio-book.png'
import Learning from '../assets/learning.png'
import Trophy from '../assets/trophy.png'
import Button from './Button'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 

import { useLayoutEffect, useRef } from "react";


const ValueProps = () => {
    const valuePropsContainerRef = useRef(null);
    const valuePropsContentRef = useRef(null);
    const valuePropsContentGsapRef = gsap.utils.selector(valuePropsContentRef);


    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(valuePropsContentGsapRef('.value') ,{opacity: 0, autoAlpha: 0, ease: "power2.out", y: 20, stagger: 0.3,scrollTrigger:{
            trigger: valuePropsContainerRef.current,
            start: '30% bottom',
            end: 'center center',
            
        }});

     
        

    },[])

    return ( <section ref={valuePropsContainerRef} className="relative z-[2] grid grid-cols-1 col-span-1 row-span-1 min-h-[900px] xl:min-h-[1024px] 2xl:h-[1300px] grid-row-1" >
        <ImageHolder src={ValueBg} className={'col-start-1 col-end-2 row-start-1 row-end-2'} alt='marketing-challengers-ss11-value'></ImageHolder>
        
        {/* Content */}
        <div className={'relative col-start-1 col-end-2 row-start-1 row-end-2 pt-16 xl:pt-20'}>
             <SectionTitle  text={"What’s in it for me?"}></SectionTitle>

            <div ref={valuePropsContentRef} className="flex flex-col items-center justify-between md:w-5/6 md:mx-auto lg:w-full lg:flex-row container-media-padding">
             <Value className={'basis-[30%] value invisible '}
            icon={AudioBook}
            iconClassName={'w-[200px] h-[216px] xl:w-[266px] xl:h-[287px]'}
            text={'“The 4-Hour Workweek” audio book priced 129,000VND for all candidates'}
            ></Value>
            
            <Value className={'basis-[30%] pt-5 value invisible xl:pt-10'} 
            icon={Trophy}
            iconClassName={'w-[200px] h-[192px] xl:w-[277px] xl:h-[267px]'}
            text='A chance to level up your personal value and leave an invaluable trademark  in the fierce marketing battlefield'/>
                
            <Value className={'basis-[30%] pt-5 value invisible lg:pt-16 xl:pt-20'}
            icon={Learning}
            iconClassName={'w-[200px] h-[201px] xl:w-[255px] xl:h-[256px]'}
            text={'Take a closer step to know how huge brands operate their daily marketing work, and contact experienced industry people with      diverse backgrounds'} />
           
           
            </div>

            <div className="flex justify-center mt-7">
                <Button text={'Register Now!'} isGlow={true} size='large'></Button>
            </div>
        </div>
       
    </section> );
}
 
export default ValueProps;