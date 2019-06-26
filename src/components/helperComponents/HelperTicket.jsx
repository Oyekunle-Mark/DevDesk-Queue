import React from 'react';
import { number, string, func, bool } from 'prop-types';
import styled from 'styled-components';

const StyledHelperTicket = styled.div`
  width: 300px;
  background: #ffffff;
  color: #212529;
  padding: 15px;
  border-radius: 4px;
  margin: 20px;

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e3e3e3;
  }

  div h3 {
    font-size: 25px;
    margin-bottom: 5px;
  }

  div img {
    width: 25px;
    height: 25px;
  }

  div img:hover {
    cursor: pointer;
  }

  p {
    font-size: 18px;
    margin: 10px 0;
  }

  p span {
    font-size: 12px;
    font-style: italic;
    font-weight: bold;
  }

  button {
    background: #55b95a;
    color: #fdfdfd;
    font-size: 15px;
    height: 40px;
    border: 1px solid #55b95a;
    border-radius: 3px;
  }

  button:hover {
    cursor: pointer;
  }
`;

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
    <StyledHelperTicket>
      <div>
        <h3>{title}</h3>
        {reAssign && (
          <img src="../../../assets/checked.svg" alt="check" onClick={() => update(id, 1, 1, userId)} />
        )}
      </div>
      <p>{description}</p>
      <p><span>Category: {category}</span></p>
      {assign && (
        <button onClick={() => assignToSelf(id, resolved, 1, userId)}>
          Help Student
        </button>
      )}
      {reAssign && (
        <button onClick={() => update(id, 0, 0, 0)}>Return to Queue</button>
      )}
    </StyledHelperTicket>
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
