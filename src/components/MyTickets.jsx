import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func, bool, number } from 'prop-types';

import {
  getStudentTickets,
  deleteTicket,
  updateTicket,
} from '../state/actionCreators';
import Ticket from './Ticket';
import StudentNav from './StudentNav';
import UpdateTicket from './UpdateTicket';

const MyTickets = ({
  gettingTickets,
  error,
  tickets,
  userId,
  getStudentTickets,
  deleteTicket,
  updateTicket,
  updatingTicket,
  history,
}) => {
  const [editing, setEditing] = useState(0);

  useEffect(() => getStudentTickets(userId), []);

  const toggleEditing = id => {
    if (editing === id) setEditing(0);
    else setEditing(id);
  };

  const studentsTickets = tickets.map(ticket => {
    if (ticket.user_id === userId)
      return (
        <div key={ticket.id}>
          <button onClick={() => toggleEditing(ticket.id)}>
            {editing === ticket.id ? 'Cancel' : 'Edit'}
          </button>
          {editing !== ticket.id ? (
            <Ticket {...ticket} remove={deleteTicket} myTicket />
          ) : null}
          {editing === ticket.id ? (
            <UpdateTicket
              {...ticket}
              error={error}
              history={history}
              updateTicket={updateTicket}
              updatingTicket={updatingTicket}
              removeEditing={setEditing}
            />
          ) : null}
        </div>
      );
  });

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
  deleteTicket: func.isRequired,
  updateTicket: func.isRequired,
  updatingTicket: bool.isRequired,
  history: object.isRequired,
};

MyTickets.defaultProps = {
  error: null,
};

const mapStateToProps = ({ user, ticket }) => ({
  gettingTickets: ticket.gettingTickets,
  updatingTicket: ticket.updatingTicket,
  error: ticket.error,
  tickets: ticket.tickets,
  userId: user.user.user_id,
});

export default connect(
  mapStateToProps,
  { getStudentTickets, deleteTicket, updateTicket },
)(MyTickets);
