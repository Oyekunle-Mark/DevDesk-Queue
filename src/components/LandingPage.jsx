import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const LandingPage = () => (
  <main>
    <Header />
    <Link to="/join">Register</Link>
    <Link to="/login">Login</Link>
  </main>
);

export default LandingPage;
