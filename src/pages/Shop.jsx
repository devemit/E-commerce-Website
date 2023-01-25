import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import Product from '../components/Product';

const Shop = () => {
  const { items } = useContext(ApiContext);
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 py-20'>
      {items.map((item) => (
        <div key={item.id}>
          <Product
            product={item}
            title={item.title}
            price={item.price}
            image={item.image}
            description={item.description}
            category={item.category}
          ></Product>
        </div>
      ))}
    </div>
  );
};

export default Shop;
