import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func, bool } from 'prop-types';

import { getStudentTickets } from '../state/actionCreators';
import Ticket from './Ticket';
import StudentNav from './StudentNav';

const MyTickets = ({
  gettingTickets,
  error,
  tickets,
  userId,
  getStudentTickets,
}) => {
  useEffect(() => getStudentTickets(userId), []);

  const studentsTickets = tickets.map(ticket => (
    <Ticket key={ticket.id} {...ticket} />
  ));

  return (
    <div>
      <StudentNav />
      {gettingTickets && <h4>Loading</h4>}
      {error && <h4>Error</h4>}
      {studentsTickets}
    </div>
  );
};

const mapStateToProps = ({ user, ticket }) => ({
  gettingTickets: ticket.gettingTickets,
  error: ticket.error,
  tickets: ticket.tickets,
  userId: user.user.user_id,
});

export default connect(
  mapStateToProps,
  { getStudentTickets },
)(MyTickets);
