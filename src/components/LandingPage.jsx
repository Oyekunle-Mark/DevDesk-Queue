import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <main>
    <Link to="/join">Register</Link>
    <Link to="/login">Login</Link>
  </main>
);

export default LandingPage;
