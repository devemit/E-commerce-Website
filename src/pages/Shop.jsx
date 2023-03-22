import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import Product from '../components/Product';
import Pagination from '../components/Pagination';

const Shop = () => {
  const { display } = useContext(ApiContext);
  return (
    <div className='grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-2 py-20 bg-slate-200'>
      {display.map((item) => (
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
      <Pagination />
    </div>
  );
};

export default Shop;
