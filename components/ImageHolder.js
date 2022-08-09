import Image from "next/image";
const ImageHolder = ({src, alt, className, objectFit='cover'}) => {
    return ( 
        <div className={"relative  " + className}>
            <Image src={src} layout='fill' alt={alt} objectFit={objectFit}></Image>
        </div>
     );
}
 
export default ImageHolder;