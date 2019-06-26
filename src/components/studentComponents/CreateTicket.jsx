import React, { useState } from 'react';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';
import styled from 'styled-components';

import { createTicket } from '../../state/actionCreators/ticketActionCreators';
import StudentNav from './StudentNav';

const StyledCreateTicket = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 30px;
    margin: auto;
    margin-top: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 350px;
    margin: auto;
    padding: 30px;
    background: #fdfdfd;
    color: #212529;
    border-radius: 5px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  h4 {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  input {
    width: 93%;
    height: 20px;
    font-size: 14px;
    color: #777777;
    background: #fafafa;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #e3e3e3;
    border-radius: 3px;
  }

  textarea {
    width: 93%;
    font-size: 14px;
    color: #777777;
    background: #fafafa;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #e3e3e3;
    border-radius: 3px;
  }

  button {
    background: #55b95a;
    color: #fdfdfd;
    font-size: 15px;
    width: 100%;
    height: 40px;
    border: 1px solid #55b95a;
    border-radius: 3px;
    margin: auto;
    margin-top: 20px;
  }

  button:hover {
    cursor: pointer;
  }
`;

const CreateTicket = ({ createTicket, creatingTicket, error, history }) => {
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
    <StyledCreateTicket>
      <StudentNav />
      <h2>Create Ticket</h2>

      <form onSubmit={handleSubmit}>
        <h4>Enter ticket details</h4>

        <input
          type="text"
          placeholder="title"
          value={titleValue}
          onChange={changeTitle}
        />
        <textarea
          placeholder="description"
          rows="5"
          cols="39"
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
    </StyledCreateTicket>
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
