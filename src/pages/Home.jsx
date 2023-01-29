import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='w-full mx-auto relative'>
        <div className='absolute w-full h-full flex flex-col max-h-[500px] justify-center'>
          <h1 className='px-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500'>
            The Future of
          </h1>
          <h1 className='px-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500'>
            Commerce is Yours
          </h1>

          <hr className='my-4 md:w-11/12 w-5/6 mx-auto' />
          <Link className='px-12 py-10' to='/shop'>
            <span className='py-4 px-10 md:py-6 md:px-14 bg-orange-500 text-white font-bold uppercase rounded-xl'>
              Shop now
            </span>
          </Link>
        </div>
        <img
          className='w-full h-screen object-cover'
          src='https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='bg-image'
        />
      </div>
    </>
  );
};

export default Home;
