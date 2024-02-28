import { gsap } from "gsap";
import { useLayoutEffect, useRef, useCallback } from "react";

const PageTitle = ({ className = '', type, title, subTitle = 'season 12' }) => {
    const subTitleRef = useRef(null);
    const titleRef = useRef(null);
    const pageTitleRef = useRef(null);

    // useCallback is used to memoize the function. This way, it doesn't change on every render, preventing unnecessary re-executions of the effect.
    const pageTitleAnim = useCallback(() => gsap.utils.selector(pageTitleRef), []);

    useLayoutEffect(() => {
        const pageTl = gsap.timeline({ defaults: { opacity: 0, autoAlpha: 0, ease: "power2.out" } });
        pageTl
            .from(pageTitleAnim('.subtitle'), { y: 40 })
            .from(pageTitleAnim('.hero-title'), { y: 30 })
    }, [pageTitleAnim]); // Now, pageTitleAnim is included in the dependency array.

    const combinedClassNames = `space-y-1 font-black text-center xl:space-y-3 2xl:space-y-4 ${className}`;

    return (
        <div ref={pageTitleRef} className={combinedClassNames}>
            {type === 2 ? <h3 ref={subTitleRef} className="tracking-[0.07em] subtitle uppercase xl:text-headline-26">{subTitle}</h3> : null}
            <h1 ref={titleRef} className="text-[30px] lg:text-headline-30 hero-title 2xl:text-hero-60 xl:text-[40px] tracking-widest leading-10 text-glow-strong ">{title}</h1>
        </div>
    );
}

export default PageTitle;
