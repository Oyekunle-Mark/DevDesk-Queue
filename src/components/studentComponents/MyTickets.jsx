import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, func, bool } from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

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
    props.color ? '2px solid #2cbe4e' : '2px solid #e76e54'};
  border-top: ${props =>
    props.color ? '2px solid #2cbe4e' : '2px solid #e76e54'};
  border-radius: 16px;
  margin: 15px;

  button {
    width: 70px;
    height: 30px;
    background: #5dddd3;
    color: #ffffff;
    font-size: 12px;
    border: 1px solid #5dddd3;
    border-radius: 14px;
  }

  button:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
    margin: 20px 0;
  }
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

  const studentsTickets = tickets.map(ticket => {
    if (ticket.user_id === userId)
      return (
        <StyledTicket key={ticket.id} color={ticket.resolved}>
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
        </StyledTicket>
      );
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
      <StyledMyTickets>{studentsTickets}</StyledMyTickets>
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
