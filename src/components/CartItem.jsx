import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';

const CartItem = ({ item }) => {
  const { removeItem, truncateStr } = useContext(ApiContext);

  return (
    <>
      <div className='p-6 bg-white text-center cursor-pointer rounded-t-3xl shadow-2xl m-6 duration-300 hover:-translate-y-2'>
        <h1 className='text-base font-semibold p-4 text-center lg:text-2xl'>
          {item.title}
        </h1>
        <div className='flex items-center justify-center py-2'>
          <img src={item.image} alt='/' className='w-32 h-32' />
          <h1 className='text-sm p-4 text-left md:text-xl'>
            {truncateStr(item.description, 300)}
          </h1>
        </div>
        <div className='flex items-center justify-between py-2 px-6 rounded-3xl'>
          <span className='text-center text-gray-600 font-semibold'>{item.price} $</span>
          <button
            onClick={() => {
              removeItem(item.id);
            }}
            className='bg-red-500 text-white font-semibold p-1 rounded'
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
