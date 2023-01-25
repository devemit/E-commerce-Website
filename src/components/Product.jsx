import React, { useContext } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { ApiContext } from '../contexts/ApiContext';

const Product = ({ title, price, description, category, image, product }) => {
  const { addToCart, truncateStr } = useContext(ApiContext);

  return (
    <>
      <div className='p-6 bg-white text-center cursor-pointer rounded-t-3xl shadow-2xl m-6 duration-300 hover:-translate-y-2'>
        <div className='bg-gray-900 rounded-t-3xl'>
          <h2 className='text-gray-100 uppercase py-2'>{category}</h2>
          <h1 className='py-2 text-gray-100'>{truncateStr(title, 45)}</h1>
          <p className='text-gray-400 text-sm py-2'>{truncateStr(description, 50)}</p>
        </div>
        <div className='flex items-center justify-center p-6'>
          <img src={image} className='w-48 h-48' />
        </div>
        <div className='flex justify-between py-4 px-6 bg-gray-900 rounded-3xl'>
          <span className='text-gray-100 px-4'>{price} $</span>
          <button
            onClick={() => {
              addToCart(product);
            }}
          >
            <RiShoppingCart2Line
              size={20}
              className='mr-4 hover:text-gray-600 text-gray-100'
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
