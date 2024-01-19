const SponsorTag = ({text='Season 00', isActive = false, handleTagClick}) => {
    return ( <div onMouseDown={() => handleTagClick(text)} className={"px-4 py-2 font-bold rounded cursor-pointer w-fit text-headline-21 md:text-lead-24 " + (isActive ? 'bg-secondary-600' : 'border border-secondary-600')}>
        {text}
    </div> );
}
 
export default SponsorTag;