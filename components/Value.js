import ImageHolder from "./ImageHolder";

const Value = ({icon, text, className, iconClassName}) => {
    return ( <div className={`flex flex-col items-center justify-center ${className}`}  >
        <ImageHolder src={icon} alt='marketing-challengers-season11-value' className={iconClassName} ></ImageHolder>
        <p className="text-center xl:text-headline-26">{text}</p>
    </div> );
}
 
export default Value;