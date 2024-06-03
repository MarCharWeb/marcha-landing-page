import PageTitle from "../components/PageTitle";
import Button from '../components/Button'
import { useRouter } from 'next/router';

const Halloffamelp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/rules');
  };

  return (
    <main className="space-y-1">
      <div className="flex flex-col items-center justify-center">
        <PageTitle title={'HALL OF FAME'}></PageTitle>
        <p className='max-w-prose font-bold text-center sm:px-4 xl:px-24 sm:pt-0 mx-2 lg:mx-0'>Meet our excellent teams through the seasons</p>
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

export default Halloffamelp;
