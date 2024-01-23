import Image from 'next/image';
import SLIDINGBANNERS from './components/slidingBanner';

export default function Home() {
  return (
    <main className='p-4 h-full min-h-fit container-xl'>
      <SLIDINGBANNERS />
      <div>Page filler</div>
      <div>Call to Action</div>
      <div>Call to action Banner</div>
      <div>Testimonials</div>
    </main>
  );
}
