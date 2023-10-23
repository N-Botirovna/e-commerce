import React, { useContext } from 'react';
import { SearchContext } from '../../../pages/home/Home';
import Card from '../../ui/Card';

function Section() {
  const { state , search} = useContext(SearchContext);
  
  const filteredProducts = state.products.filter(
    (product) => product.title.toLowerCase().includes(search.toLowerCase())
    // && (filter ? product.category === filter : true)
    );
  return (
    <div className='flex flex-wrap justify-between items-center gap-6'>
      {filteredProducts.map((product) => (
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
  );
}

export default Section;
