import React, { useEffect } from 'react';
import { arrayOf, object, bool, func } from 'prop-types';
import { connect } from 'react-redux';

import { getAdminTickets } from '../../state/actionCreators';
import HelperNav from './HelperNav';
import HelperTicket from './HelperTicket';

const ManageTickets = ({ tickets, gettingTickets, error, getAdminTickets }) => {
  const userId = JSON.parse(localStorage.getItem('DevDeskAuth')).user.user_id;

  useEffect(() => getAdminTickets(userId), []);

  const myTicketList = tickets.map(ticket => {
    if (ticket.assigned_user === userId) return <HelperTicket key={ticket.id} {...ticket} />;
  });

  return (
    <div>
      <HelperNav />
      {gettingTickets && <h4>Loading</h4>}
      {error && <h4>Error</h4>}
      {myTicketList}
    </div>
  );
};

ManageTickets.propTypes = {
  tickets: arrayOf(object).isRequired,
  gettingTickets: bool.isRequired,
  error: bool,
  getAdminTickets: func.isRequired,
};

ManageTickets.defaultProps = {
  error: null,
};

const mapStateToProps = ({ ticket }) => ({
  tickets: ticket.tickets,
  gettingTickets: ticket.gettingTickets,
  error: ticket.error,
});

export default connect(
  mapStateToProps,
  { getAdminTickets },
)(ManageTickets);
