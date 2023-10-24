import { useState, useContext } from 'react';
import { Pagination } from '@mui/material';
import Card from '../../ui/Card';
import { SearchContext } from '../../../App';
import { Link } from 'react-router-dom';

function Section({values, setValues}) {
  
  const { state, search } = useContext(SearchContext);
  const nums = [6, 7, 8, 9, 10];
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

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };

  const handleShowChange = (e) => {
    setCardsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleClick = ()=>{
    setValues([])
  }
  const handleClick1 = (val) => {
    setValues(values.filter((value) => value !== val));
  };

  return (
    <>
    <div className='flex gap-3 flex-wrap mb-6'>
      {values.map((val) => (
        <h2  className='border border-gray-500 rounded-lg py-3 px-5' onClick={handleClick1}  key={val}>{val } x</h2>
      ))}
      <h2 className='text-blue-400 py-3 px-5' onClick={handleClick}>Clear all filter</h2>
    </div>
      <div className='flex flex-wrap justify-between items-center gap-6'>
        {currentCards.map((product) => (
          <Link to={`/single-page/${product.id}`} key={product.id}>
            <Card
              key={product.id}
              name={product.title}
              image={product.image}
              price={product.price}
              desc={product.description}
              rate={product.rating.rate}
              category={product.category}
            />
          </Link>
        ))}
      </div>
      <div className='flex justify-end gap-7 items-center mt-16'>
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
