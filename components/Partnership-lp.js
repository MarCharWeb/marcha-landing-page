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
      <div className="flex flex-col items-center justify-center mt-16">
        <PageTitle title={'PARTNERSHIP'}></PageTitle>
        <p className='max-w-prose font-bold text-center sm:px-4 xl:px-24 sm:pt-0 mx-2 lg:mx-0'>Meet our Season 12&apos;s Judges and Mentors        </p>
        <Button
          onClick={handleClick}
          isGlow={true}
          type='primary'
          className='animate-bounce-slow font-bold mt-5 mb-20'
          text={'View more'}
          size='large'
        />
      </div>
    </main>
  );
};

export default Whocanjoin;
