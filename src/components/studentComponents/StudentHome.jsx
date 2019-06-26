import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func, bool } from 'prop-types';
import styled from 'styled-components';

import { getTickets } from '../../state/actionCreators/ticketActionCreators';
import Ticket from './Ticket';
import StudentNav from './StudentNav';

const StyledStudentHome = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StudentHome = ({ tickets, getTickets, gettingTickets, error }) => {
  useEffect(getTickets, []);

  const ticketList = tickets.map(ticket => {
    if (ticket.resolved === 0) return <Ticket key={ticket.id} {...ticket} />;
  });

  return (
    <div>
      <StudentNav />
      <StyledStudentHome>
        {gettingTickets && <h4>Loading...</h4>}
        {error && <h4>Error</h4>}
        {ticketList}
      </StyledStudentHome>
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
