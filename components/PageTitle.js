const PageTitle = ({type, title}) => {
    return ( <div className="space-y-1 font-bold text-center">
        {type === 2 ? <h3 className="tracking-widest uppercase text-headline-31 text-tertiary-500">Season 11</h3> : null}
        <h1 className=" text-display-64 md:text-hero-80 xl:text-uber-112 text-primary-500">{title}</h1>
    </div> );
}
 
export default PageTitle;