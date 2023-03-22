import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='w-full mx-auto relative'>
        <div className='absolute w-full h-screen flex flex-col top-0 left-0 bottom-0 right-0 items-center justify-center'>
          <h1 className='px-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>
            The <span className='text-emerald-600'>Future</span> of
          </h1>
          <h1 className='px-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>
            Commerce is <span className='text-emerald-600'>Yours</span>
          </h1>
          <Link className='px-12 py-10' to='/shop'>
            <span className='py-4 px-10 md:py-6 md:px-14 bg-emerald-700 hover:bg-emerald-600 text-white font-bold uppercase rounded-xl'>
              Shop now
            </span>
          </Link>
        </div>
        <img
          className='w-[100%] h-screen object-cover'
          src='https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='bg-image'
        />
      </div>
    </>
  );
};

export default Home;
