import Button from '../components/Button'
import { useRouter } from 'next/router';
const TimePanelleft = ({className, roundIcon, roundName, roundNameIcon, date, description}) => {
    const router = useRouter();

  const handleClick = () => {
    router.push('/ourhuman');
  };
    return ( <div className={"flex flex-row" + className}>
        <div className="flex "> {/* This div wraps the roundIcon */}
          {roundIcon}
        </div>

        <div className='items-center justify-center'>
            <h4 className="flex items-center justify-center gap-2 font-bold text-lead-24 lg:text-headline-25 mb-1.5 lg:mb-2.5">
            {roundName}
            </h4>
            <Button
                onClick={handleClick}
                isGlow={true}
                type='primary'
                className='animate-bounce-slow font-bold mt-10 mb-20'
                text={'Details'}
                size='large'
            />
        </div> 
    </div> );
}
 
export default TimePanelleft;