const SectionTitle = ({text, className, type='center'}) => {
    return ( <h2 className={"font-bold  text-display-64 text-tertiary-500  " + (type == 'left' ? 'text-left ' : 'text-center ') +className}>{text}</h2> );
}
 
export default SectionTitle;