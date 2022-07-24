import Image from "next/image";
const ImageHolder = ({src, alt, className}) => {
    return ( 
        <div className={"relative " + className}>
            <Image src={src} layout='fill' alt={alt} objectFit='cover'></Image>
        </div>
     );
}
 
export default ImageHolder;