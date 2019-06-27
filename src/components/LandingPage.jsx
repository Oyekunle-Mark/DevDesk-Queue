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
  min-height: 70vh;
  padding: 50px 20px;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 10px;
  }
`;

const StyledCaption = styled.div`
  width: 45%;

  h2 {
    font-size: 40px;
    line-height: 50px;
  }

  h6 {
    font-size: 16px;
    margin: 20px 0;
  }

  a button {
    margin: 20px 25px 20px 0;
    background: #55b95a;
    color: #fdfdfd;
    font-size: 15px;
    width: 120px;
    height: 40px;
    border: 1px solid #55b95a;
    border-radius: 3px;
  }

  a button:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
    text-align: center;

    h2 {
      font-size: 30px;
      line-height: 40px;
    }
  }
`;

const StyledHeroImage = styled.div`
width: 50%;

  img {
    max-width: 100%;
    width: auto;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const LandingPage = () => (
  <StyledLandingPage>
    <Header />
    <StyledMain>
      <StyledCaption>
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
      </StyledCaption>

      <StyledHeroImage>
        <img src="../../assets/queue.png" alt="queue" />
      </StyledHeroImage>
    </StyledMain>
  </StyledLandingPage>
);

export default LandingPage;
