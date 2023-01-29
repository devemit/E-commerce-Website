import React, { useContext } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { ApiContext } from '../contexts/ApiContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { handleNav, nav, setNav, cartItems } = useContext(ApiContext);

  return (
    <div className='mx-auto px-12 py-6 bg-gray-900 w-full top-0 fixed z-10'>
      {/* Medium,Large */}
      <nav className='flex items-center justify-between'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-semibold text-slate-200'>
          Ratio
        </h1>

        <ul className='md:flex hidden justify-between items-center'>
          <Link
            to='/'
            className='text-xl text-slate-100 px-6 hover:underline focus:underline'
          >
            Home
          </Link>
          <Link
            to='/shop'
            className='text-xl text-slate-100 px-6 hover:underline focus:underline'
          >
            Shop
          </Link>
          <Link
            to='/about'
            className='text-xl text-slate-100 px-6 hover:underline focus:underline'
          >
            About
          </Link>
          <Link
            to='/contact'
            className='text-xl text-slate-100 px-6 hover:underline focus:underline'
          >
            Contact
          </Link>
        </ul>
        <div className='flex'>
          <Link to='/cart'>
            <RiShoppingCart2Line
              size={25}
              className='mx-8 cursor-pointer text-slate-100 hover:text-gray-600 z-10'
            />
          </Link>

          {cartItems.length > 0 && (
            <div className='absolute'>
              <span className='p-1 ml-4 text-white text-xs font-semibold rounded-full bg-red-600'>
                {cartItems.length}
              </span>
            </div>
          )}

          <div className='md:hidden' onClick={handleNav}>
            {nav ? (
              <AiOutlineClose size={25} className='text-slate-100' />
            ) : (
              <AiOutlineMenu size={25} className='text-slate-100' />
            )}
          </div>
        </div>
      </nav>
      {/*  Mobile  */}
      <div>
        <ul
          onClick={() => setNav(false)}
          className={
            nav
              ? 'fixed top-0 left-0 flex flex-col justify-center items-center bg-white opacity-90 w-[100%] h-[100%] uppercase ease-in-out duration-500 pt-16 z-10'
              : 'fixed top-[-100%]'
          }
        >
          <Link
            className='block py-2 px-6 text-gray-800 font-semibold focus:font-bold focus:outline-none hover:font-bold'
            to='/'
          >
            Home
          </Link>
          <Link
            to='/shop'
            className='block py-2 px-6 text-gray-800 font-semibold focus:font-bold focus:outline-none hover:font-bold'
          >
            Shop
          </Link>
          <Link
            to='/about'
            className='block py-2 px-6 text-gray-800 font-semibold focus:font-bold focus:outline-none hover:font-bold'
          >
            About
          </Link>
          <Link
            to='/contact'
            className='block py-2 px-6 text-gray-800 font-semibold focus:font-bold focus:outline-none hover:font-bold'
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
