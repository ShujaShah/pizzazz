import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className='bg-yellow-500 px-4 py-3 uppercase border-b border-stone-200'>
      <Link to="/" className='tracking-widest'>Pizzazz</Link>
      <SearchOrder />
    <Username/>
    </header>
  );
};

export default Header;
