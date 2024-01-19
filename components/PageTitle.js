import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const PageTitle = ({type, title, subTitle = 'season 11'}) => {

    const subTitleRef = useRef(null);
    const titleRef = useRef(null);
    const pageTitleRef = useRef(null);
    const pageTitleAnim = gsap.utils.selector(pageTitleRef);

    
    useLayoutEffect(()=>{
        const pageTl = gsap.timeline({defaults: {opacity: 0, autoAlpha: 0, ease: "power2.out"}});

        pageTl.from(pageTitleAnim('.subtitle'), {y: 40})
            .from(pageTitleAnim('.hero-title'), {y: 30})
    }, [])
    return ( <div ref={pageTitleRef} className="space-y-1 font-black text-center xl:space-y-3 2xl:space-y-4">
        {type === 2 ? <h3 ref={subTitleRef} className="tracking-[0.07em] invisible subtitle uppercase xl:text-headline-26 text-tertiary-500">{subTitle}</h3> : null}
        <h1 ref={titleRef} className="border-text text-[36px] lg:text-headline-48 invisible hero-title 2xl:text-hero-80 xl:text-[72px] tracking-widest leading-10  lg:text-glow-strong  text-primary-500">{title}</h1>
    </div> );
}
 
export default PageTitle;