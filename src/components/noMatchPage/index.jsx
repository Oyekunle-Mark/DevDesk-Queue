import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

const StyledNoMatchPage = styled.div`
  h2 {
    font-size: 40px;
    line-height: 50px;
    margin: 50px 0;
    text-align: center;
  }
`;

const NoMatchPage = () => (
  <StyledNoMatchPage>
    <Header />
    <h2>404 - No page matches that address.</h2>
  </StyledNoMatchPage>
);

export default NoMatchPage;
