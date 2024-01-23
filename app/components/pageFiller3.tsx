export default function PageFiller3() {
  return (
    <>
      <div className='w-full relative mt-16'>
        <div className='text-center text-4xl text-gray-500 font-bold uppercase mb-4'>
          Testimonials
        </div>
        <div className='text-center text-xl text-gray-400 mb-6'>
          Sed laoreet sem quis nisl aliquam, sed facilisis diam lobortis.
          Aliquam ac convallis diam
        </div>
        <div className='w-20 border-b border-gray-200 mx-auto mb-6'></div>
        <div className='items-center justify-center mb-16 flex '>
          <div className='p-10 pb-16 text-center text-xl text-gray-400 rounded-xl w-72 shadow-lg border relative mt-16 -mr-4 z-0'>
            <p className='text-xl font-bold uppercase pb-2 text-gray-500'>
              Juan
            </p>
            Aliquam ac convallis diam. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Donec ullamcorper leo sit amet feugiat viverra.
            In felis neque, gravida nec erat imperdiet, imperdiet finibus risus.
            <img
              src='person2.jpg'
              alt=''
              width={80}
              className='rounded-full border-4 border-white absolute -bottom-10 left-1/2 transform -translate-x-1/2'
            />
          </div>
          <div className='p-10 pb-16 text-center text-xl rounded-xl w-72 shadow-2xl shadow-outline border bg-orange-600 text-white relative z-10'>
            <p className='text-xl font-bold uppercase pb-2 text-white'>Mo</p>
            Aliquam ac convallis diam. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Donec ullamcorper leo sit amet feugiat viverra.
            In felis neque, gravida nec erat imperdiet, imperdiet finibus risus.
            <div>
              <img
                src='person3.jpg'
                alt=''
                width={80}
                className='rounded-full border-4 border-white absolute -bottom-10 left-1/2 transform -translate-x-1/2'
              />
            </div>
          </div>

          <div className='p-10 pb-16 text-center text-xl text-gray-400 rounded-xl w-72 shadow-lg border relative mt-16 -ml-4 z-0'>
            <p className='text-xl font-bold uppercase pb-2 text-gray-500'>
              Penelope
            </p>
            Aliquam ac convallis diam. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Donec ullamcorper leo sit amet feugiat viverra.
            In felis neque, gravida nec erat imperdiet, imperdiet finibus risus.
            <div>
              <img
                src='person1.jpg'
                alt=''
                width={80}
                className='rounded-full border-4 border-white absolute -bottom-10 left-1/2 transform -translate-x-1/2'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
