const PageTitle = ({type, title, subTitle = 'season 11'}) => {
    return ( <div className="space-y-1 font-black text-center xl:space-y-3 2xl:space-y-4">
        {type === 2 ? <h3 className="tracking-[0.07em] uppercase xl:text-headline-26 text-tertiary-500">{subTitle}</h3> : null}
        <h1 className="border-text text-[44px] lg:text-headline-48 2xl:text-hero-80 xl:text-[72px] leading-10  text-glow-strong  text-primary-500">{title}</h1>
    </div> );
}
 
export default PageTitle;