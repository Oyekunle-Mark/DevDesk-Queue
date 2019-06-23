import axios from 'axios';

export default () => {
  const token = localStorage.getItem('DevDeskToken')
    ? localStorage.getItem('DevDeskToken')
    : 'not logged in';

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
};
