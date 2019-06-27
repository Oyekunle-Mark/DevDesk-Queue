import React, { useState } from 'react';
import { object, func, number, string, bool } from 'prop-types';
import styled from 'styled-components';

const StyledUpdateTicket = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    background: #ffffff;
    color: #212529;
    padding: 15px;
    border-radius: 4px;
    margin: 20px;
  }
  
  input {
    height: 20px;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 1px solid #e3e3e3;
    background: #fafafa;
    font-size: 15px;
    margin-bottom: 5px;
  }

  textarea {
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 1px solid #e3e3e3;
    background: #fafafa;
    font-size: 12px;
    margin-bottom: 5px;
    font-family: 'Montserrat', sans-serif;
  }

  form button {
    background: #55b95a;
    color: #fdfdfd;
    font-size: 15px;
    border: 1px solid #55b95a;
    border-radius: 3px;
    height: 22px;
  }

  form button:hover {
    cursor: pointer;
  }
`;

const UpdateTicket = ({
  id,
  title,
  description,
  category,
  error,
  history,
  updatingTicket,
  updateTicket,
  removeEditing,
}) => {
  const [titleValue, updateValue] = useState(title);
  const [descriptionValue, updateDescription] = useState(description);
  const [categoryValue, updateCategory] = useState(category);

  const changeTitle = e => updateValue(e.target.value);
  const changeDescription = e => updateDescription(e.target.value);
  const changeCategory = e => updateCategory(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    removeEditing('');

    updateTicket(id, titleValue, descriptionValue, categoryValue).then(res => {
      if (res.status === 201) history.push('/home');
    });
  };
  return (
    <StyledUpdateTicket>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titleValue}
          onChange={changeTitle}
        />
        <textarea
          value={descriptionValue}
          onChange={changeDescription}
          cols="37"
        />
        <input
          type="category"
          value={categoryValue}
          onChange={changeCategory}
        />
        <button type="submit">
          Update Ticket {updatingTicket && <h4>Updating</h4>}
        </button>
      </form>
      {error && <h4>Error</h4>}
    </StyledUpdateTicket>
  );
};

UpdateTicket.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  category: string.isRequired,
  updatingTicket: bool.isRequired,
  history: object.isRequired,
  error: bool,
  updateTicket: func.isRequired,
  removeEditing: func.isRequired,
};

UpdateTicket.defaultProps = {
  error: null,
};

export default UpdateTicket;
