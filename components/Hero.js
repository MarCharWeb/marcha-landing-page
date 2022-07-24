const Hero = ({children}) => {
    return ( <header className="relative z-[1] min-h-screen overflow-hidden pt-44 bg-gradient-to-b from-bg-600 to-bg-900">
        
        <svg className="absolute z-[-1] top-0 left-0 w-screen" width="1440" height="1100" viewBox="0 0 1440 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_220_2024)">
<rect x="-62" y="322" width="400" height="400" rx="200" fill="#FFDA19" fill-opacity="0.79"/>
</g>
<g filter="url(#filter1_f_220_2024)">
<rect x="426" y="165" width="400" height="400" rx="200" fill="#F49402"/>
</g>
<g filter="url(#filter2_f_220_2024)">
<rect x="920" y="207" width="400" height="400" rx="200" fill="#E24A13"/>
</g>
<g filter="url(#filter3_f_220_2024)">
<rect x="1150" width="400" height="400" rx="200" fill="#1865B3"/>
</g>
<defs>
<filter id="filter0_f_220_2024" x="-462" y="-78" width="1200" height="1200" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_220_2024"/>
</filter>
<filter id="filter1_f_220_2024" x="-74" y="-335" width="1400" height="1400" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_220_2024"/>
</filter>
<filter id="filter2_f_220_2024" x="420" y="-293" width="1400" height="1400" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_220_2024"/>
</filter>
<filter id="filter3_f_220_2024" x="650" y="-500" width="1400" height="1400" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_220_2024"/>
</filter>
</defs>
        </svg>
        {children}
        
    </header> );
}
 
export default Hero;