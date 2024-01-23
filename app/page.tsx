import Image from 'next/image';
import SLIDINGBANNERS from './components/slidingBanner';
import PAGEFILLER1 from './components/pageFiller1'

export default function Home() {
  return (
    <main className='p-4 h-full min-h-fit container-xl'>
      <SLIDINGBANNERS />
      <PAGEFILLER1 />
      <div>Call to Action</div>
      <div>Call to action Banner</div>
      <div>Testimonials</div>
    </main>
  );
}
