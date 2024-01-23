import Image from 'next/image';
import SLIDINGBANNERS from './components/slidingBanner';
import PAGEFILLER1 from './components/pageFiller1';
import PAGEFILLER2 from './components/pageFiller2';
import PAGEFILLER3 from './components/pageFiller3';

export default function Home() {
  return (
    <main className='p-4 h-full min-h-fit container-xl'>
      <SLIDINGBANNERS />
      <PAGEFILLER1 />
      <div className='h-64 w-full bg-orange-600 mt-16 rounded-xl'>
        CATEGORIES
      </div>
      <PAGEFILLER2 />
      <PAGEFILLER3 />
    </main>
  );
}
