import React from 'react';
import { number, string, func, bool } from 'prop-types';

const HelperTicket = ({
  id,
  title,
  category,
  description,
  resolved,
  assignToSelf,
  assign,
}) => {
  const userId = JSON.parse(localStorage.getItem('DevDeskAuth')).user.user_id;

  return (
    <div>
      <p>{title}</p>
      <p>{category}</p>
      <p>{description}</p>
      {assign && (
        <button
          onClick={() => assignToSelf(id, resolved, 1, userId)}
        >
          Help Student
        </button>
      )}
    </div>
  );
};

HelperTicket.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  category: string.isRequired,
  description: string.isRequired,
  assignToSelf: func,
  assign: bool,
  resolved: number.isRequired,
};

HelperTicket.defaultProps = {
  assignToSelf: f => f,
  assign: false,
};

export default HelperTicket;
