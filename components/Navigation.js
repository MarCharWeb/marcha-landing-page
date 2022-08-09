import ImageHolder from "./ImageHolder";
import Logo from '../assets/logo-white.png'
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
const Navigation = () => {
    const router = useRouter()
    const navRef = useRef();
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        function observeNavScroll (){
            if (window.scrollY > 0){
                setIsScroll(true)
           }else{
                setIsScroll(false)
           }
        }
        window.addEventListener('scroll', observeNavScroll)

        return () => {
            window.removeEventListener('scroll', observeNavScroll)
        }
    }, [])
    return ( <nav ref={navRef} className={"fixed top-0 h-[150px] z-50 container-media-padding flex w-full justify-between " + (isScroll ? 'bg-bg-950 ': '')}>
        {/* Logo */}
        <ImageHolder src={Logo} alt='logo-marcha' className={'w-[150px] h-[150px]'}></ImageHolder>

        {/* Navigation List Begins */}
        <ul className="flex items-center gap-12 font-bold text-white text-body-18">
            <li className={'px-4 py-2 rounded ' + (router.asPath == '/' && !isScroll ? 'bg-bg-300/40' : '')}>
                <Link href={'/'}><a className={router.asPath == '/' ? 'text-primary-500': ''}>Home</a></Link>
            </li>
            <li className={'px-4 py-2 rounded ' + (router.asPath == '#about-marketing-challengers' && !isScroll ? 'bg-bg-300/40' : '')}>
                <Link href={'#about-marketing-challengers'}><a className={router.asPath == '/#about-marketing-challengers' ? 'text-primary-500': ''}>About Us</a></Link>
            </li>
            <li className='px-4 py-2 rounded'>
                <Link href={'/rules'}><a>Rules &#38; Regulations</a></Link>
            </li>
            <li className='px-4 py-2 rounded'>
                <Link href={'/news'}><a>News</a></Link>
            </li>
        </ul>
        {/* Navigation List Ends */}
    </nav> );
}
 
export default Navigation