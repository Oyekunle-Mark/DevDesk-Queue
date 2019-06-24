import React from 'react';
import { string, func, number, bool } from 'prop-types';

const Ticket = ({ id, title, category, description, remove, myTicket }) => (
  <div>
    <p>{title}</p>
    <p>{category}</p>
    <p>{description}</p>
    {myTicket && <button onClick={() => remove(id)}>Delete</button>}
  </div>
);

Ticket.propTypes = {
  title: string.isRequired,
  category: string.isRequired,
  description: string.isRequired,
  id: number.isRequired,
  remove: func,
  myTicket: bool,
};

Ticket.defaultProps = {
  remove: f => f,
  myTicket: false,
};

export default Ticket;
