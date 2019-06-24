import React from 'react';
import { string } from 'prop-types';

const Ticket = ({ title, category, description }) => (
  <div>
    <p>{title}</p>
    <p>{category}</p>
    <p>{description}</p>
  </div>
);

Ticket.propTypes = {
  title: string.isRequired,
  category: string.isRequired,
  description: string.isRequired,
};

export default Ticket;
