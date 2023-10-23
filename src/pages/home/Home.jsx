import React, { createContext, useEffect, useState } from 'react';
import Header from '../../components/templates/header/Header';
import Section from '../../components/templates/section/Section';
import SideBar from '../../components/templates/sidebar/SideBar';

export const SearchContext = createContext();

function Home() {
  const [state, setState] = useState({
    isFetched: false,
    products: [], 
    error: false
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setState({
          products: data, 
          isFetched: true,
          error: false
        });
      })
      .catch((err) => {
        setState({
          isFetched: true,
          products: [], 
          error: true
        });
      });
  }, []);

  

  return (
    <SearchContext.Provider value={{ search, setSearch, state }}>
      <Header />
      <div className="flex container mx-auto w-full mt-3 gap-20">
        <div className="w-1/5 border-t py-2">
          <SideBar />
        </div>
        <div className="w-3/4">
          <Section />
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default Home;
