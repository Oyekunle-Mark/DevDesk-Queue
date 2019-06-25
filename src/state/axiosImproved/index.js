import axios from 'axios';

export default () => {
  const token = JSON.parse(localStorage.getItem('DevDeskAuth'))
    ? JSON.parse(localStorage.getItem('DevDeskAuth')).token
    : 'not logged in';

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
};
