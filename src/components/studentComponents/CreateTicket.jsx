import React, { useState } from 'react';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';

import { createTicket } from '../../state/actionCreators/ticketActionCreators';
import StudentNav from './StudentNav';

const CreateTicket = ({
  createTicket,
  creatingTicket,
  error,
  history,
}) => {
  const [titleValue, updateValue] = useState('');
  const [descriptionValue, updateDescription] = useState('');
  const [categoryValue, updateCategory] = useState('');

  const userId = JSON.parse(localStorage.getItem('DevDeskAuth')).user.user_id;

  const changeTitle = e => updateValue(e.target.value);
  const changeDescription = e => updateDescription(e.target.value);
  const changeCategory = e => updateCategory(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    createTicket(titleValue, descriptionValue, categoryValue, userId).then(
      res => {
        if (res.status === 201) history.push('/home');
      },
    );
  };
  return (
    <div>
      <StudentNav />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={titleValue}
          onChange={changeTitle}
        />
        <textarea
          placeholder="description"
          value={descriptionValue}
          onChange={changeDescription}
        />
        <input
          type="category"
          placeholder="category"
          value={categoryValue}
          onChange={changeCategory}
        />
        <button type="submit">
          Create Ticket {creatingTicket && <h4>Submitting</h4>}
        </button>
      </form>
      {error && <h4>Error</h4>}
    </div>
  );
};

CreateTicket.propTypes = {
  creatingTicket: bool.isRequired,
  createTicket: func.isRequired,
  history: object.isRequired,
  error: bool,
};

CreateTicket.defaultProps = {
  error: null,
};

const mapStateToProps = ({ ticket }) => ({
  creatingTicket: ticket.creatingTicket,
  error: ticket.error,
});

export default connect(
  mapStateToProps,
  { createTicket },
)(CreateTicket);
