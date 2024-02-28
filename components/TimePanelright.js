import Button from '../components/Button'
import { useRouter } from 'next/router';

const TimePanelright = ({ className, roundIcon, roundName }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('');
    };

    return (
        <div className={`flex ${className} h-[250px] items-center justify-center `}>
            <div>
                <h4 className='flex font-bold text-lead-24 lg:text-headline-25'>
                    {roundName}
                </h4>
                <Button
                    onClick={handleClick}
                    isGlow={true}
                    type='primary'
                    className='animate-bounce-slow font-bold'
                    text={'Details'}
                    size='large'
                />
            </div>
            <div className="">
                {roundIcon}
            </div>
        </div>
    );
}

export default TimePanelright;
