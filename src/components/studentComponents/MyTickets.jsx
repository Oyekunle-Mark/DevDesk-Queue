import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func, bool } from 'prop-types';
import styled from 'styled-components';

import {
  getStudentTickets,
  deleteTicket,
  updateTicket,
} from '../../state/actionCreators/ticketActionCreators';

import Ticket from './Ticket';
import StudentNav from './StudentNav';
import UpdateTicket from './UpdateTicket';

const StyledMyTickets = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledTicket = styled.div`
  border-right: 0;
  border-bottom: 0;
  border-left: ${props =>
    props.color ? '1px solid #25b6d2' : '1px solid #e76e54'};
  border-top: ${props =>
    props.color ? '1px solid #25b6d2' : '1px solid #e76e54'};
  margin: 15px;

  img {
    height: 30px;
    width: 30px;
  }

  img:hover {
    cursor: pointer;
  }
`;

const MyTickets = ({
  gettingTickets,
  error,
  tickets,
  getStudentTickets,
  deleteTicket,
  updateTicket,
  updatingTicket,
  history,
}) => {
  const [editing, setEditing] = useState(0);

  const userId = JSON.parse(localStorage.getItem('DevDeskAuth')).user.user_id;

  useEffect(() => getStudentTickets(userId), []);

  const toggleEditing = id => {
    if (editing === id) setEditing(0);
    else setEditing(id);
  };

  const editIcon = '../../../assets/edit.svg';
  const cancelIcon = '../../../assets/cancel.svg';

  const studentsTickets = tickets.map(ticket => {
    if (ticket.user_id === userId)
      return (
        <StyledTicket key={ticket.id} color={ticket.resolved}>
          <img
            onClick={() => toggleEditing(ticket.id)}
            src={editing === ticket.id ? cancelIcon : editIcon}
            alt="edit"
          />
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
        </StyledTicket>
      );
  });

  return (
    <div>
      <StudentNav />
      <StyledMyTickets>
        {gettingTickets && <h4>Loading</h4>}
        {error && <h4>Error</h4>}
        {studentsTickets}
      </StyledMyTickets>
    </div>
  );
};

MyTickets.propTypes = {
  gettingTickets: bool.isRequired,
  error: bool,
  tickets: arrayOf(object).isRequired,
  getStudentTickets: func.isRequired,
  deleteTicket: func.isRequired,
  updateTicket: func.isRequired,
  updatingTicket: bool.isRequired,
  history: object.isRequired,
};

MyTickets.defaultProps = {
  error: null,
};

const mapStateToProps = ({ ticket }) => ({
  gettingTickets: ticket.gettingTickets,
  updatingTicket: ticket.updatingTicket,
  error: ticket.error,
  tickets: ticket.tickets,
});

export default connect(
  mapStateToProps,
  { getStudentTickets, deleteTicket, updateTicket },
)(MyTickets);
