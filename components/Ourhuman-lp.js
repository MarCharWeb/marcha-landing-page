import PageTitle from "../components/PageTitle";
import Button from '../components/Button'
import { useRouter } from 'next/router';

const OurHumnanlp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/ourhuman');
  };

  return (
    <main className="space-y-1">
        <div className="flex flex-col items-center justify-center pt-28 sm:pt-0">
            <PageTitle title={'OUR HUMAN'}></PageTitle>
            <p className='max-w-prose font-bold text-center pt-10 sm:px-20 xl:px-24 sm:pt-0 mt-2.5'>Meet the talented Leaders and Members of Marketing Challengers Season 12, who will create an impressive journey.</p>
            <Button
                onClick={handleClick}
                isGlow={true}
                type='primary'
                className='animate-bounce-slow font-bold mt-10 mb-20'
                text={'View More'}
                size='large'
            />
        </div>
    </main>
  );
};

export default OurHumnanlp;
