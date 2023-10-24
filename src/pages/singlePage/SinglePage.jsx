import React, { useContext } from 'react';
import { SearchContext } from '../../App';
import Footer from '../../components/templates/footer/Footer';
import Header from '../../components/templates/header/Header';
import Offer from '../../components/templates/offer/Offer';
import SingleCard from '../../components/templates/singleCard/SingleCard';

function SinglePage() {
  const { search, state, setSearch } = useContext(SearchContext);
    
  return (
    <>
      <div className='h-[100vh]'>
      <Header />
      <SingleCard/>
      </div>
      <Offer/>
      <Footer/>
    </>
  );
}

export default SinglePage;