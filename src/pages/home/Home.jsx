import React, { createContext, useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../App';
import Footer from '../../components/templates/footer/Footer';
import Header from '../../components/templates/header/Header';
import Section from '../../components/templates/section/Section';
import SideBar from '../../components/templates/sidebar/SideBar';



function Home() {
  const [check, setCheck] = useState([])
  const handleSelectedValues = (selectedValues) => {
    console.log('Selected Values:', selectedValues);
    setCheck(selectedValues)
  };
  
  return (
    <>
      <Header />
      <div className="flex container mx-auto w-full mt-3 gap-20">
        <div className="w-1/5 border-t py-2">
          <SideBar handleSelectedValues={handleSelectedValues}/>
        </div>
        <div className="w-3/4">
          <Section values = {check} setValues = {setCheck}/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
