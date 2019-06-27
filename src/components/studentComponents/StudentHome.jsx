import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func, bool } from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import { getTickets } from '../../state/actionCreators/ticketActionCreators';
import Ticket from './Ticket';
import StudentNav from './StudentNav';

const StyledStudentHome = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledPendingState = styled.article`
  display: flex;
  justify-content: center;

  h5 {
    font-size: 17px;
    font-weight: bold;
    margin: 15px 0;
    text-align: center;
    color: red;
  }
`;

const StudentHome = ({ tickets, getTickets, gettingTickets, error }) => {
  useEffect(getTickets, []);

  const ticketList = tickets.map(ticket => {
    if (ticket.resolved === 0) return <Ticket key={ticket.id} {...ticket} />;
  });

  return (
    <div>
      <StudentNav />
      <StyledPendingState>
        {gettingTickets && (
          <Loader type="TailSpin" color="#fdfdfd" height={80} width={80} />
        )}
        {error && <h5>Error</h5>}
      </StyledPendingState>
      <StyledStudentHome>{ticketList}</StyledStudentHome>
    </div>
  );
};

StudentHome.propTypes = {
  tickets: arrayOf(object).isRequired,
  getTickets: func.isRequired,
  gettingTickets: bool.isRequired,
  error: bool,
};

StudentHome.defaultProps = {
  error: null,
};

const mapStateToProps = ({ ticket }) => ({
  tickets: ticket.tickets,
  gettingTickets: ticket.gettingTickets,
  error: ticket.error,
});

export default connect(
  mapStateToProps,
  { getTickets },
)(StudentHome);
