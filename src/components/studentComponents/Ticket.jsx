import React from 'react';
import { string, func, number, bool } from 'prop-types';
import styled from 'styled-components';

const StyledTicket = styled.div`
  width: 250px;
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
    width: 20px;
    height: 20px;
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

  @media screen and (max-width: 300px) {
    width: 150px;
  }
`;

const Ticket = ({ id, title, category, description, remove, myTicket }) => (
  <StyledTicket>
    <div>
      <h3>{title}</h3>
      {myTicket && (
        <img
          src="../../../assets/delete.svg"
          alt="delete"
          onClick={() => remove(id)}
        />
      )}
    </div>
    <p>{description}</p>
    <p><span>Category: {category}</span></p>
  </StyledTicket>
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
