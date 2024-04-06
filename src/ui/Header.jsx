import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

const Header = () => {
  return (
    <header>
      <Link to="/">Pizzazz</Link>
      <SearchOrder />
      <p>
        <span>23 Pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </header>
  );
};

export default Header;
