import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems } = useContext(ApiContext);
  const total = cartItems.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className='py-10'>
      {cartItems.length === 0 ? (
        <div className='flex items-center justify-center h-screen'>
          <h1 className='font-bold text-center text-4xl'>
            Your Cart is currently empty!
          </h1>
        </div>
      ) : (
        <div className='grid md:grid-cols-1'>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      )}
      <div className='p-6 float-right'>
        <span className='font-semibold text-xl'>Total: {total.toFixed(2)}$</span>
      </div>
    </div>
  );
};

export default Cart;
