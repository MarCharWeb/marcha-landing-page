
import Link from 'next/link'
const InternalLink = ({className, href='/', text='Back to homepage'}) => {
    return ( <Link href={href} >
        <a className={`underline text-primary-500 ${className}`}>{text}</a>
        </Link> );
}
 
export default InternalLink;