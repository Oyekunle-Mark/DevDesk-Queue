import React, { useEffect } from 'react';
import { func, arrayOf, object, bool } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getTickets } from '../../state/actionCreators/ticketActionCreators';
import { updateHelperTicket } from '../../state/actionCreators/helperTicketActionCreators';

import HelperNav from './HelperNav';
import HelperTicket from './HelperTicket';

const StyledHelperHome = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const HelperHome = ({
  getTickets,
  tickets,
  gettingTickets,
  updateHelperTicket,
}) => {
  useEffect(getTickets, []);

  const userId = JSON.parse(localStorage.getItem('DevDeskAuth')).user.user_id;

  const ticketList = tickets.map(ticket => {
    if (ticket.resolved === 0 && ticket.assigned_user !== userId)
      return (
        <HelperTicket
          key={ticket.id}
          {...ticket}
          assign
          assignToSelf={updateHelperTicket}
        />
      );
  });

  return (
    <div>
      <HelperNav />
      <StyledHelperHome>
        {gettingTickets && <h4>Loading</h4>}
        {ticketList}
      </StyledHelperHome>
    </div>
  );
};

HelperHome.propTypes = {
  getTickets: func.isRequired,
  tickets: arrayOf(object).isRequired,
  gettingTickets: bool.isRequired,
  updateHelperTicket: func.isRequired,
};

const mapStateToProps = ({ ticket }) => ({
  tickets: ticket.tickets,
  gettingTickets: ticket.gettingTickets,
});

export default connect(
  mapStateToProps,
  { getTickets, updateHelperTicket },
)(HelperHome);
