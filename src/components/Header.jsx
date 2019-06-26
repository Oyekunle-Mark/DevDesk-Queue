import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
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
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <div>
        <img src="../../assets/dev.svg" alt="logo" />

        <h1>DevDesk</h1>
      </div>
    </Link>

    <div>
      <Link to="/login">Login</Link>
      <Link to="/join">Register</Link>
    </div>
  </StyledHeader>
);

export default Header;
