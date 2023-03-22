import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';

const Pagination = () => {
  const { items, itemsToDisplay, setCurrentPage, currentPage } = useContext(ApiContext);
  let pages = [];
  let len = items.length;
  for (let i = 1; Math.ceil(i <= len / itemsToDisplay); i++) {
    pages.push(i);
  }

  return (
    <div className='pages'>
      {pages.map((page) => {
        return (
          <button
            className={page === currentPage ? 'active' : ''}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
