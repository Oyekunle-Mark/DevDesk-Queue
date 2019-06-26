import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledStudentNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #101822;
  padding: 7px 15px;
  border-bottom: 1px solid #777777;

  div {
    display: flex;
    align-items: center;
  }

  div img {
    width: 50px;
    height: 50px;
  }

  div h1 {
    font-size: 20px;
  }

  div a {
    margin: 0 10px;
    font-size: 14px;
  }

  div a:hover {
    text-decoration: underline;
  }

  .selected {
    color: #b6b6b6;
    font-weight: bold;
  }
`;

const StudentNav = () => (
  <StyledStudentNav>
    <Link to="/home">
      <div>
        <img src="../../assets/dev.svg" alt="logo" />

        <h1>DevDesk</h1>
      </div>
    </Link>

    <div>
      <NavLink to="/home" activeClassName="selected">
        Help Channel
      </NavLink>
      <NavLink to="/create_ticket" activeClassName="selected">
        Create Ticket
      </NavLink>
      <NavLink to="/my_tickets" activeClassName="selected">
        My Tickets
      </NavLink>
    </div>
  </StyledStudentNav>
);

export default StudentNav;
