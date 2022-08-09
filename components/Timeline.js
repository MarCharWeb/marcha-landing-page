import SectionTitle from "./SectionTitle";
import TimePanel from "./TimePanel";

const Timeline = () => {
    return ( <section className="relative z-[1] ">
        <SectionTitle text={'Timeline'} ></SectionTitle>
        
            

            {/* <svg className="absolute bottom-0  left-0 z-[-1] w-screen" width="1440" height="588" viewBox="0 0 1440 588" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_247_4025)">
<g filter="url(#filter0_f_247_4025)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-27.9121 455.406L13.7789 449.899C56.7728 444.219 140.155 433.203 224.054 416.067C307.953 398.931 391.197 376.838 469.209 325.176C548.525 273.342 624.041 192.757 709.512 187.518C793.68 182.45 888.974 251.565 980.6 292.921C1070.79 333.457 1158.62 346.063 1237.94 294.229C1317.25 242.394 1386.88 127.283 1423.06 70.0511L1457.81 11.9999L1499.07 324.287L1457.38 329.794C1414.38 335.474 1331 346.49 1246.32 357.677C1161.63 368.865 1076.95 380.053 993.566 391.068C908.881 402.256 824.196 413.443 740.814 424.459C656.129 435.647 571.444 446.834 486.76 458.022C403.378 469.037 318.693 480.225 234.008 491.413C149.323 502.6 65.9408 513.616 22.9469 519.296L-18.7441 524.803L-27.9121 455.406Z" fill="#CB4311"/>
</g>
<g opacity="0.3" filter="url(#filter1_f_247_4025)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-13.8175 494.832L27.8736 489.325C70.8674 483.645 154.249 472.629 238.159 455.572C322.068 438.514 405.331 416.564 483.414 365.437C562.8 314.137 638.437 234.465 723.898 229.147C808.055 224.002 903.209 292.06 994.745 332.725C1084.85 372.584 1172.63 384.876 1252.02 333.576C1331.41 282.276 1401.22 168.534 1437.49 111.98L1472.33 54.62L1513.04 362.8L1471.35 368.308C1428.36 373.988 1344.98 385.003 1260.29 396.191C1175.61 407.378 1090.92 418.566 1007.54 429.582C922.855 440.769 838.17 451.957 754.788 462.972C670.103 474.16 585.419 485.348 500.734 496.535C417.352 507.551 332.667 518.738 247.982 529.926C163.297 541.114 79.9148 552.129 36.921 557.809L-4.77004 563.317L-13.8175 494.832Z" fill="#CCAE14"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M-18.8082 519.193L22.8828 513.685C65.8767 508.005 149.259 496.989 233.155 479.834C317.052 462.679 400.291 440.551 478.286 388.757C557.584 336.791 633.071 255.982 718.544 250.762C802.715 245.714 898.043 315.088 989.692 356.614C1079.91 397.317 1167.74 410 1247.04 358.034C1326.34 306.068 1395.93 190.62 1432.09 133.221L1466.81 74.9999L1508.2 388.297L1466.51 393.805C1423.52 399.485 1340.14 410.5 1255.45 421.688C1170.77 432.876 1086.08 444.063 1002.7 455.079C918.015 466.266 833.33 477.454 749.948 488.47C665.263 499.657 580.578 510.845 495.893 522.033C412.511 533.048 327.826 544.236 243.141 555.423C158.456 566.611 75.0743 577.627 32.0804 583.306L-9.6106 588.814L-18.8082 519.193Z" fill="#180232"/>
</g>
<defs>
<filter id="filter0_f_247_4025" x="-107.912" y="-68" width="1686.98" height="672.803" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_247_4025"/>
</filter>
<filter id="filter1_f_247_4025" x="-33.8174" y="34.6201" width="1566.86" height="548.697" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_247_4025"/>
</filter>
<clipPath id="clip0_247_4025">
<rect width="1570.07" height="587.804" fill="white" transform="translate(-60)"/>
</clipPath>
</defs>
            </svg> */}


        {/* Timeline container */}
        <div className="relative z-[1] container-media-padding grid w-11/12 grid-cols-2 mx-auto mt-10 gap-y-6 gap-x-20">
            <svg className="absolute transform -translate-x-1/2 left-1/2 " width="21" height="1172" viewBox="0 0 21 1172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="10.5" y1="9" x2="10.5" y2="1172" stroke="#F9FDFE"/>
            <circle cx="10.5" cy="10.5" r="10.5" fill="#F59F1B" fill-opacity="0.42"/>
            <circle cx="10.5" cy="10.5" r="5.5" fill="#F49402"/>
            <circle cx="10.5" cy="400.5" r="5.5" fill="#FEF4E6"/>
            <circle cx="10.5" cy="793.5" r="5.5" fill="#FEF4E6"/>
            </svg>


            


            <TimePanel></TimePanel>
            <div></div>
            <div></div>
    
            <TimePanel className={''}></TimePanel>
            <TimePanel className={''}></TimePanel>
            
        
            
        </div>
    </section> );
}
 
export default Timeline;