import { useState, useContext } from 'react';
import { SearchContext } from '../../../pages/home/Home';
import { Pagination } from '@mui/material';
import Card from '../../ui/Card';

function Section() {
  const { state, search } = useContext(SearchContext);
  const nums = [10, 9, 8, 7, 6, 5, 4, 3];
  const [cardsPerPage, setCardsPerPage] = useState(nums[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = state.products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    // && (filter ? product.category === filter : true)
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredProducts.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleShowChange = (event) => {
    setCardsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <div className='flex flex-wrap justify-between items-center gap-6'>
        {currentCards.map((product) => (
          <Card
            key={product.id}
            name={product.title}
            image={product.image}
            price={product.price}
            desc={product.description}
            rate={product.rating.rate}
            category={product.category}
          />
        ))}
      </div>
      <div className='flex justify-end gap-7 items-center mt-5'>
        <select
          className='py-2 px-3 border border-gray-300 rounded-lg  bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500'
          onChange={handleShowChange}
          value={cardsPerPage}
        >
          {nums.map((num) => (
            <option key={num} value={num}>
              Show {num}
            </option>
          ))}
        </select>
        <Pagination
          count={Math.ceil(filteredProducts.length / cardsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant='outlined'
          shape='rounded'
        />
      </div>
    </>
  );
}

export default Section;
