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

    const handleHomeAndCloseMenu = () => {
        handleHomeClick();
        closeMenu();
    };


    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleHomeClick = () => {
        // Scroll to the top of the website
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (<nav style={{ zIndex: '50' }} ref={navRef} className={"fixed top-0 h-[90px] xl:h-[110px] z-50 container-media-padding flex w-full items-center justify-between " + (isScroll ? 'bg-[#0F0616CC]' : '')}>
        {/* Logo */}
        <Link href="/"><a onClick={handleHomeClick} className={router.asPath == '/' ? 'active-link' : ''}><ImageHolder src={Logo} alt='logo-marcha' className={'w-[100px] h-[100px] xl:w-[150px] xl:h-[150px]'}></ImageHolder></a></Link>

        {/* Navigation List Begins */}
        <ul className="lg:flex hidden items-center justify-between flex-grow max-w-[80%] xl:max-w-[80%] font-normal text-white text-small-16 xl:text-body-10">
            <li className={'px-4 py-2 li-hover-effect'}>
                <Link href={'/'} scroll={false} >
                    <a onClick={handleHomeClick} className={`nav-item font-bold ${router.asPath === '/' ? 'active-link' : ''}`}>HOME</a>
                </Link>
            </li>
            <li className={'px-4 py-2 li-hover-effect'}>
                <Link href={'/aboutus'}>
                    <a className={`nav-item ${router.asPath == '/aboutus' ? 'active-link' : ''} font-bold`}>ABOUT US</a>
                </Link>

            </li>
            {/* <li className={'px-4 py-2 rounded '}>
                <Link href={'/#hall-of-fame'}><a className={router.asPath == '/#hall-of-fame' ? 'active-link': ''}>HALL OF FAME</a></Link>
            </li> */}
            <li className={'px-4 py-2 li-hover-effect '}>
                <Link href={'/sponsor'}>
                    <a className={`nav-item ${router.asPath == '/sponsor' ? 'active-link' : ''} font-bold`}>SPONSORSHIP</a>
                </Link>
            </li>
            <li className={'px-4 py-2 li-hover-effect '}>
                <Link href={'/news'}>
                    <a className={`nav-item ${router.asPath == '/news' ? 'active-link' : ''} font-bold`}>NEWS</a>
                </Link>
            </li>
            <li className={'px-4 py-2 li-hover-effect '}>
                <Link href={'/ourhuman'}>
                    <a className={`nav-item ${router.asPath == '/ourhuman' ? 'active-link' : ''} font-bold`}>OUR HUMAN</a>
                </Link>
            </li>
            <li className='px-4 py-2 li-hover-effect'>
                <Link href={'/rules'}>
                    <a className={`nav-item ${router.asPath == '/rules' ? 'active-link' : ''} font-bold`}>RULES &#38; REGULATIONS</a>
                </Link>
            </li>

            {/* <li className={'px-4 py-2 rounded ' }>
                <Link  href={'/news'}><a className={router.asPath == '/news' || router.pathname.startsWith("/news") ? 'active-link': ''}>News</a></Link>
            </li> */}
        </ul>
        {/* Navigation List Ends */}


        {/* Navigation Menu Begins */}
        <div className="lg:hidden">
            <button onClick={toggleMenu} aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none hover:bg-[#0F0616CC] hover:borderradius-10">

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
                <div className="absolute right-0 z-10 mt-5 w-56 origin-top-right bg-black shadow-lg bg-[#0F0616CC]">
                    <div className="py-1">
                        {/* Mobile menu items */}
                        {/* Example Mobile Menu Item */}
                        <Link href="/">
                            <a className="block px-4 py-2 text-sm text-gray-700 text-center" onClick={handleHomeAndCloseMenu}>HOME</a>
                        </Link>
                        <Link href="/aboutus">
                            <a className="block px-4 py-2 text-sm text-gray-700 text-center" onClick={closeMenu}>ABOUT US</a>
                        </Link>
                        <Link href="/sponsor">
                            <a className="block px-4 py-2 text-sm text-gray-700 text-center" onClick={closeMenu}>SPONSORSHIP</a>
                        </Link>
                        <Link href="/news">
                            <a className="block px-4 py-2 text-sm text-gray-700 text-center" onClick={closeMenu}>BLOG</a>
                        </Link>
                        <Link href="/ourhuman">
                            <a className="block px-4 py-2 text-sm text-gray-700 text-center" onClick={closeMenu}>OUR HUMAN</a>
                        </Link>
                        <Link href="/rules">
                            <a className="block px-4 py-2 text-sm text-gray-700 text-center" onClick={closeMenu}>RULES & REGULATIONS</a>
                        </Link>
                    </div>
                </div>
            )}
        </div>

        {/* Navigation Menu Ends */}

    </nav>);
}

export default Navigation
