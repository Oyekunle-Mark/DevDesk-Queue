import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHelperNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #101822;
  padding: 7px 15px;
  border-bottom: 1px solid #777777;
  margin-bottom: 20px;

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
    color: #247adb;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    div h1 {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    div a {
      margin: 0 5px;
      font-size: 11px;
    }
  }
`;

const HelperNav = () => (
  <StyledHelperNav>
    <Link to="/helper">
      <div>
        <img src="../../assets/dev.svg" alt="logo" />

        <h1>DevDesk</h1>
      </div>
    </Link>

    <div>
      <NavLink to="/helper" activeClassName="selected">
        Open Tickets
      </NavLink>
      <NavLink to="/manage_tickets" activeClassName="selected">
        Manage Tickets
      </NavLink>
    </div>
  </StyledHelperNav>
);

export default HelperNav;
