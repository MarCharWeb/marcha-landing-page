import Image from "next/image";
import {forwardRef} from 'react';

const ImageHolder = forwardRef(({src, alt, className, objectFit='cover', style, layout='responsive', priority=false}, ref) => {
    return ( <div ref={ref} className={"relative  " + className} style={style}>
            <Image src={src} layout={layout} alt={alt} priority={priority} objectFit={objectFit}></Image>
        </div>
     )
})

ImageHolder.displayName="ImageHolder"
export default ImageHolder;