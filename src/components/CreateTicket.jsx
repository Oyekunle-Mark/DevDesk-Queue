import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createTicket } from '../state/actionCreators';
import StudentNav from './StudentNav';

const CreateTicket = ({
  createTicket,
  creatingTicket,
  error,
  userId,
  history,
}) => {
  const [titleValue, updateValue] = useState('');
  const [descriptionValue, updateDescription] = useState('');
  const [categoryValue, updateCategory] = useState('');

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
    console.log(titleValue, descriptionValue, categoryValue, userId);
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

const mapStateToProps = ({ user, ticket }) => ({
  creatingTicket: ticket.creatingTicket,
  error: ticket.error,
  userId: user.user.user_id,
});

export default connect(
  mapStateToProps,
  { createTicket },
)(CreateTicket);
