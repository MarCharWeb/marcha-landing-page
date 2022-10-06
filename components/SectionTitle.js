const SectionTitle = ({text, className, type='center'}) => {
    return ( <h2 className={"font-black text-headline-48 lg:text-display-64 text-primary-500 border-text text-glow-normal  " + (type == 'left' ? 'text-left ' : 'text-center ') +className}>{text}</h2> );
}
 
export default SectionTitle;