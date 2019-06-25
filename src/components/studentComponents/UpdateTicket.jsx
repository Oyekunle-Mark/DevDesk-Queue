import React, { useState } from 'react';
import { object, func, number, string, bool } from 'prop-types';

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
    <div>
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
          Update Ticket {updatingTicket && <h4>Updating</h4>}
        </button>
      </form>
      {error && <h4>Error</h4>}
    </div>
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
