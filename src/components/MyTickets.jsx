import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func, bool, number } from 'prop-types';

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

MyTickets.propTypes = {
  gettingTickets: bool.isRequired,
  error: bool,
  tickets: arrayOf(object).isRequired,
  userId: number.isRequired,
  getStudentTickets: func.isRequired,
};

MyTickets.defaultProps = {
  error: null,
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
