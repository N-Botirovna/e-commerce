import React, { useContext } from 'react';
import { SearchContext } from '../../App';
import Footer from '../../components/templates/footer/Footer';
import Header from '../../components/templates/header/Header';
import SingleCard from '../../components/templates/singleCard/SingleCard';

function SinglePage() {
  const { search, state, setSearch } = useContext(SearchContext);
    
  return (
    <>
      <div className='h-[100vh]'>
      <Header />
      <SingleCard/>
      </div>
      <div className='bg-blue-600 container mx-auto px-8 py-10 rounded-lg flex items-center justify-between'>
        <div>
            <h2 className='text-3xl font-bold text-white mb-4'>Super discount on more than 100 USD</h2>
            <p className='text-xl text-white'>Have you ever finally just write dummy info</p>
        </div>
        <button className='bg-yellow-600 text-white rounded-lg text-2xl font-semibold py-4 px-6'>Shop now</button>
      </div>
      <Footer/>
    </>
  );
}

export default SinglePage;