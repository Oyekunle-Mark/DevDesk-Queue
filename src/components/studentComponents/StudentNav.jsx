import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentNav = () => (
  <nav>
    <NavLink to="/home">Student Home</NavLink>
    <NavLink to="/create_ticket">Create Ticket</NavLink>
    <NavLink to="/my_tickets">My Tickets</NavLink>
  </nav>
);

export default StudentNav;
