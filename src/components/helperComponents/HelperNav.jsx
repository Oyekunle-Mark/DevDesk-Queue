import React from 'react';
import { NavLink } from 'react-router-dom';

const HelperNav = () => (
  <nav>
    <NavLink to="/helper">Open Tickets</NavLink>
    <NavLink to="/manage_tickets">Manage Tickets</NavLink>
  </nav>
);

export default HelperNav;
