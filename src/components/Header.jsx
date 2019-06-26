import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>DevDesk Queue</h1>

    <div>
      <Link to="/login">Login</Link>
      <Link to="/join">Register</Link>
    </div>
  </header>
);

export default Header;
