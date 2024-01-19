const RegisterStats = ({number}) => {
    return ( <div className="flex items-center gap-2">
        <span className="grid w-12 h-12 font-black rounded text-headline-26 shadow-glow place-items-center bg-secondary-600">{Math.floor(number / 10)}</span>
        <span className="grid w-12 h-12 font-black rounded text-headline-26 place-items-center shadow-glow bg-secondary-600">{number % 10} </span>
    </div> );
}
 
export default RegisterStats;