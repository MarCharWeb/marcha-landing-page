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
    const [isMenuOpen, setIsMenuOpen] = useState(false);


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
    return ( <nav ref={navRef} className={"fixed top-0 h-[120px] z-50 container-media-padding flex w-full items-center justify-between " + (isScroll ? 'bg-bg-black ': '')}>
        {/* Logo */}
        <a href="/"><ImageHolder src={Logo} alt='logo-marcha' className={'w-[100px] h-[100px] xl:w-[150px] xl:h-[150px]'}></ImageHolder></a>
        

        {/* Navigation List Begins */}
        <ul className="lg:flex hidden items-center justify-between flex-grow max-w-[63%] xl:max-w-[50%] font-normal text-white text-small-16 xl:text-body-18">
            <li className={'px-4 py-2 '}>
                <Link href={'/'}  scroll={false} ><a className={router.asPath == '/' ? 'active-link': ''}>Home</a></Link>
            </li>
            <li className={'px-4 py-2 rounded '}>
                <Link href={'/#about-marketing-challengers'}><a className={router.asPath == '/#about-marketing-challengers' ? 'active-link': ''}>About Us</a></Link>
            </li>
            <li className='px-4 py-2 rounded'>
                <Link href={'/rules'}><a className={router.asPath == '/rules' ? 'active-link': ''}>Rules &#38; Regulations</a></Link>
            </li>
            <li className={'px-4 py-2 rounded ' }>
                <Link  href={'/news'}><a className={router.asPath == '/news' || router.pathname.startsWith("/news") ? 'active-link': ''}>News</a></Link>
            </li>
        </ul>
        {/* Navigation List Ends */}


        {/* Navigation Menu Begins */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded menu-button focus:outline-none focus:shadow-outline hover:bg-grey-700 focus:bg-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-bg-50 " viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className="absolute left-0 w-full top-full">
              <div className="px-5 py-16 rounded shadow-lg bg-grey-50">

                {/* Close Menu Icon */}
                <div className="flex items-center justify-between mb-4">
                  
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="text-grey-600 w-7" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <ul className="flex flex-col items-center space-y-12 ">
                    <li>
                        <Link
                        href="/" scroll={false}
                        ><a aria-label="Home" className="capitalize transition-colors duration-200 f text-bg-500 text-button-21 ">Home</a></Link>
                    </li>
        
                    <li>
                        <Link
                        href="/#about-marketing-challengers"
                        ><a aria-label="About Us" className="capitalize transition-colors duration-200 text-bg-500 text-button-21 ">About Us</a></Link>
                    </li>

                    <li>
                        <Link
                        href="/rules"
                        ><a aria-label="Rules & Regulations" className="capitalize transition-colors duration-200 text-bg-500 text-button-21 ">Rules &#38; Regulations</a></Link>
                    </li>

                    <li>
                        <Link
                        href="/news"
                        ><a aria-label="News" className="capitalize transition-colors duration-200 text-bg-500 text-button-21 ">News</a></Link>
                    </li>

                </ul>
                
              </div>
            </div>
          )}
        </div>

        {/* Navigation Menu Ends */}

    </nav> );
}
 
export default Navigation