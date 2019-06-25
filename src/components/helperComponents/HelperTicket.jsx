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
  reAssign,
  update,
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
      {reAssign && <button onClick={() => update(id, 1, 1, userId)}>Resolved</button>}
      {reAssign && <button onClick={() => update(id, 0, 0, 0)}>Return to Queue</button>}
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
  reAssign: bool,
  update: func,
};

HelperTicket.defaultProps = {
  assignToSelf: f => f,
  assign: false,
  reAssign: false,
  update: f => f,
};

export default HelperTicket;
