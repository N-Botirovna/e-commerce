
import React, { useContext } from 'react';
import { Logo } from '../../../image/logo/logo';
import Button from '../../ui/Button';
import InputField from '../../ui/InputField';
import { UilHeart } from '@iconscout/react-unicons';
import { SearchContext } from '../../../App';
import { Link } from 'react-router-dom';

function Header() {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className='m-auto container flex justify-between items-center py-6'>
      <Logo />
      <form className='flex items-center w-3/5'>
        <InputField
          placeholder={'search'}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button title={'search'} />
      </form>
      <Link to={"/orders"} className='flex flex-col ml-16 items-center'>
        <UilHeart />
        <p>Orders</p>
      </Link>
    </div>
  );
}

export default Header;
