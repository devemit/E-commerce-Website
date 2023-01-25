import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='w-full mx-auto'>
        <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              The <span className='text-violet-600'>Future of</span>
            </h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              <span className='text-violet-600'>Commerce is</span> Yours
            </h1>
            <Link className='px-4 py-8' to='/shop'>
              <span className='py-4 px-10 md:py-6 md:px-14 bg-violet-300 text-black font-bold uppercase rounded-xl'>
                Shop now
              </span>
            </Link>
          </div>
          <img
            className='w-full h-full object-cover'
            src='https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='/'
          />
        </div>
      </div>
    </>
  );
};

export default Home;
