import PageTitle from "../components/PageTitle";
import Button from '../components/Button'
import { useRouter } from 'next/router';

const Whocanjoin = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/rules');
  };

  return (
    <main className="space-y-1">
      <div className="flex flex-col items-center justify-center">
        <PageTitle title={'WHO CAN JOIN?'}></PageTitle>
        <p className='max-w-prose font-bold text-center sm:px-4 xl:px-24 sm:pt-0 mx-2 lg:mx-0'>University and college students from year 01 to year 04 in all nationalities who live Vietnam, having a passion for challenges and learning in the Marketing arena.
        </p>
        <Button
          onClick={handleClick}
          isGlow={true}
          type='primary'
          className='animate-bounce-slow font-bold mt-10 mb-20'
          text={'About Rules & Regulations'}
          size='large'
        />
      </div>
    </main>
  );
};

export default Whocanjoin;
