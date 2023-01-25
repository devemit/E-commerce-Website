import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='max-w-[1640px] mx-auto'>
        <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              The <span className='text-orange-500'>Future of</span>
            </h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              <span className='text-orange-500'>Commerce is</span> Yours
            </h1>
            <Link className='px-4 py-8' to='/shop'>
              <span className='py-4 px-10 md:py-6 md:px-14 bg-violet-300 text-black font-bold uppercase rounded-xl'>
                Shop now
              </span>
            </Link>
          </div>
          <img
            className='w-full h-screen object-cover'
            src='https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
            alt='/'
          />
        </div>
      </div>
    </>
  );
};

export default Home;
