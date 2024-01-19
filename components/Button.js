import {forwardRef} from 'react';

const Button =forwardRef( ({type ='button', className, onClick, text, isPrimary = true, isGlow=false, size='small', loadingText='Hang on...', isLoading=false}, ref) => {
    return ( <button 
            ref={ref}
            type={type}
            className={'font-bold text-secondary-900 rounded-full flex justify-center items-center  hover:text-primary-500 duration-300 ' + (isPrimary ? 'bg-gradient-to-r from-[#FFDA19] to-[#CC7B00] hover:from-bg-black hover:to-bg-black ': 'border border-secondary-600 ') 
            + (size == 'small' ? 'px-6 py-0.5 text-body-18 ' : size == 'large' ? 'px-6 py-3 text-headline-26 ':'') + (isLoading ? 'opacity-50 pointer-events-none': '') 
            + (isGlow ? 'shadow-glow ': '') + className}
            onMouseDown={onClick}>
            {!isLoading ? text : <> {loadingText} <svg width="24" className="animate-spin" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5128 2 12.9355 2.38604 12.9933 2.88338L13 3V6C13 6.55228 12.5523 7 12 7C11.4872 7 11.0645 6.61396 11.0067 6.11662L11 6V3C11 2.44772 11.4477 2 12 2ZM6 11C6.55228 11 7 11.4477 7 12C7 12.5128 6.61396 12.9355 6.11662 12.9933L6 13H3C2.44772 13 2 12.5523 2 12C2 11.4872 2.38604 11.0645 2.88338 11.0067L3 11H6ZM6.2129 4.8097C5.82061 4.50468 5.25338 4.53241 4.89289 4.89289C4.50237 5.28342 4.50237 5.91658 4.89289 6.30711L7.04289 8.45711L7.1371 8.5403C7.52939 8.84532 8.09662 8.81759 8.45711 8.45711C8.84763 8.06658 8.84763 7.43342 8.45711 7.04289L6.30711 4.89289L6.2129 4.8097Z" fill="#FCFCFC"/>
                </svg> </>
            }
            </button> );
}
 )

Button.displayName= "Button"

export default Button;