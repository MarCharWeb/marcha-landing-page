import { FaTiktok } from "react-icons/fa";
const Footer = () => {
    return ( 
        <div style={{ position: 'relative', zIndex: 100, backgroundColor: 'rgba(61, 6, 125, 0.6)', paddingLeft: '15px', paddingRight: '15px'}}>
    <section className="flex relative z-[5] flex-col items-start justify-between gap-4 pt-6 xl:items-end xl:flex-row text-small-16 md:text-headline-21 xl:pt-6 pb-2 xl:pl-4">
        <div>
        <p className="text-small-16"><span className="font-bold text-secondary-500">Contact Information:</span></p>
        <p className="text-XSmall-12 lg:text-small-16"><span className="font-bold text-primary-500">Contact:</span> rmitbcmarketingchallengers@gmail.com</p>
        <p className="text-XSmall-12 lg:text-small-16"><span className="font-bold text-primary-500">Sponsor Partnership:</span> marketingchallengers.sponsor@gmail.com</p>
        <p className="text-XSmall-12 pb-4 lg:pb-0 lg:mb-10 lg:text-small-16"><span className="font-bold text-primary-500">Media Partnership:</span> marketingchallengers.media@gmail.com</p>

        <p className="text-small-16 "><span className="font-bold text-secondary-500 ">Location:</span></p>
        <p className="text-XSmall-12 lg:text-small-16"><span className="">RMIT Vietnam University - Saigon South campus, 702 Nguyen Van Linh Street, District 7, HCMC</span></p>
        </div>
        
        <div className="flex flex-col gap-0.5 xl:pr-8 w-96">
            <p className="text-small-16 "><span className="font-bold text-secondary-500">Hotline:</span></p>
            <p className="text-XSmall-12 lg:text-small-16"><span className="font-bold text-primary-500">Project Leader:</span> Ngo Thi Mai Hoa - (+84) 906 528 086</p>
            <p className="text-XSmall-12 lg:text-small-16 pb-4 lg:pb-0"><span className="font-bold text-primary-500">Media Leader: </span> Tran Thi Minh Anh - (+84) 908 447 888</p>
            
            <p className="text-small-16"><span className="font-bold text-secondary-500"> Follow us on:</span></p>
            <div className="flex items-center gap-4">
            <div className="footer-hover-effect">

                 <a target='_blank' rel="noreferrer"  href="https://www.facebook.com/marketing.challengers" className="flex flex-col items-center p-2">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.8213 22V13H16.5537L17 9H13.8213V7.052C13.8213 6.022 13.8476 5 15.2869 5H16.7447V2.14C16.7447 2.097 15.4925 2 14.2257 2C11.58 2 9.92341 3.657 9.92341 6.7V9H7V13H9.92341V22H13.8213H13.8213Z" fill="#FFFFFF"/>
                    </svg>
                    <span className="text-XSmall-12 lg:text-small-16" >Facebook</span>
                    <span className="text-XSmall-12 lg:text-small-16" >Fanpage</span>
                </a>
                </div>
                <div className="footer-hover-effect">

                <a target='_blank' rel="noreferrer" href="https://bit.ly/MarChaFacebookGroup" className="flex flex-col items-center p-2">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.8213 22V13H16.5537L17 9H13.8213V7.052C13.8213 6.022 13.8476 5 15.2869 5H16.7447V2.14C16.7447 2.097 15.4925 2 14.2257 2C11.58 2 9.92341 3.657 9.92341 6.7V9H7V13H9.92341V22H13.8213H13.8213Z" fill="#FFFFFF"/>
                    </svg>
                    <span className="text-XSmall-12 lg:text-small-16">Facebook</span>
                    <span className="text-XSmall-12 lg:text-small-16">Group</span>
                </a>
                </div>
                <div className="footer-hover-effect">

                 <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/marketing-challengers/" className="flex flex-col items-center place-self-stretch p-2">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.9999 22H17.9999V15.001C17.9999 13.081 17.1529 12.01 15.6339 12.01C13.9809 12.01 12.9999 13.126 12.9999 15.001V22H8.99994V9H12.9999V10.462C12.9999 10.462 14.2549 8.26 17.0829 8.26C19.9119 8.26 21.9999 9.986 21.9999 13.558V22V22ZM4.442 6.921C3.093 6.921 2 5.819 2 4.46C2 3.102 3.093 2 4.442 2C5.79 2 6.883 3.102 6.883 4.46C6.884 5.819 5.79 6.921 4.442 6.921V6.921ZM2 22H7V8.99999H2V22Z" fill="#FFFFFF"/>
                    </svg>
                    <span className="text-XSmall-12 lg:text-small-16 mt-3">Linkedin</span>
                </a>
                </div>
                <div className="footer-hover-effect">
                <a target='_blank' rel="noreferrer" href="https://open.spotify.com/show/2Z04Hb6Ate8xan1p9fALZO" className="flex flex-col items-center place-self-stretch p-2">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.915 10.865C14.692 8.951 9.375 8.775 6.297 9.709C5.803 9.858 5.281 9.58 5.131 9.085C4.981 8.591 5.26 8.069 5.754 7.919C9.287 6.846 15.159 7.053 18.87 9.256C19.314 9.52 19.46 10.094 19.196 10.538C18.934 10.982 18.358 11.129 17.915 10.865V10.865ZM17.81 13.7C17.584 14.067 17.104 14.182 16.737 13.957C14.05 12.305 9.952 11.827 6.773 12.792C6.36 12.916 5.925 12.684 5.8 12.272C5.676 11.86 5.908 11.425 6.32 11.3C9.951 10.198 14.466 10.732 17.553 12.629C17.92 12.854 18.035 13.334 17.81 13.7V13.7ZM16.5876 16.423C16.4076 16.717 16.0246 16.81 15.7306 16.63C13.3826 15.195 10.4266 14.871 6.94555 15.666C6.61055 15.743 6.27555 15.533 6.19955 15.197C6.12255 14.862 6.33155 14.528 6.66855 14.451C10.4776 13.58 13.7446 13.955 16.3806 15.566C16.6746 15.746 16.7676 16.129 16.5876 16.423V16.423ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.478 17.523 2.001 12 2.001V2Z" fill="#FFFFFF"/>
                    </svg>
                    <span className="text-XSmall-12 lg:text-small-16 mt-3">Spotify</span>

                </a>
                </div>
                <div className="footer-hover-effect">
                    <a target='_blank' rel="noreferrer" href="https://www.tiktok.com/@marketingchallengers?_t=8kcDEZAyBd3&_r=1" className="flex flex-col items-center place-self-stretch p-2">
                        <FaTiktok size={'1.35em'}/>
                        <span className="text-XSmall-12 lg:text-small-16 mt-3">Tiktok</span>
                    </a>
                 </div>
            </div>
        </div>
    </section> 
    </div>);
}
 
export default Footer;
