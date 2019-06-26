import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';

const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;

  div {
    width: 50%;
  }

  div h2 {
    font-size: 40px;
    line-height: 50px;
  }

  div h6 {
    font-size: 16px;
    margin: 20px 0;
  }

  img {
    max-width: 700px;
    height: auto;
  }

  div a button {
    margin: 20px 60px 20px 0;
    background: #55b95a;
    color: #fdfdfd;
    font-size: 15px;
    width: 150px;
    height: 40px;
    border: 1px solid #55b95a;
    border-radius: 3px;
  }

  div a button:hover {
    cursor: pointer;
  }
`;

const LandingPage = () => (
  <StyledLandingPage>
    <Header />
    <StyledMain>
      <div>
        <h2>
          DevDesk Queue is a place where you can escalate your concerns and
          receive help.
        </h2>
        <h6>Beat the queue with DevDesk Queue.</h6>
        <Link to="/join">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>

      <div>
        <img src="../../assets/queue.png" alt="queue" />
      </div>
    </StyledMain>
  </StyledLandingPage>
);

export default LandingPage;
