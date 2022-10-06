import Image from "next/image";
const ImageHolder = ({src, alt, className, objectFit='cover', style, layout='responsive', priority=false}) => {
    return ( 
        <div className={"relative  " + className} style={style}>
            <Image src={src} layout={layout} alt={alt} priority={priority} objectFit={objectFit}></Image>
        </div>
     );
}
 
export default ImageHolder;